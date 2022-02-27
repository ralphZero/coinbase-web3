import React, { useState, useEffect } from 'react';
import Header from './Header';
import Portfolio from './Portfolio';
import Stack from 'react-bootstrap/Stack';
import BalanceChart from './balanceChart';
import Promos from './Promos';
import { ThirdwebSDK } from '@3rdweb/sdk';
import { ethers } from 'ethers'

const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        process.env.NEXT_PUBLIC_METAMASK_KEY,
        ethers.getDefaultProvider('https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161')
    )
);

const Main = ({walletAddress}) => {

    const [sanityTokens, setSanityTokens] = useState([]);
    const [thirdWebTokens, setThirdWebTokens] = useState([]);

    useEffect(() => {
        const getAllTokens = async () => {
 
            const coins = await fetch("https://nfp0o5sr.api.sanity.io/v1/data/query/production?query=*%5B_type%3D%3D'coins'%5D%20%7B%0A%20%20name%2C%0A%20%20usdprice%2C%0A%20%20contractaddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D")
            const tempSanityToken = (await coins.json()).result;
            
            setSanityTokens(tempSanityToken);
            setThirdWebTokens(tempSanityToken.map((token) => sdk.getTokenModule(token.contractaddress))) ;
     
        }
        return getAllTokens();
    }, []);

    useEffect(() => {
        const navbarHeight = document.getElementById('navbar').clientHeight;
        const windowHeight = window.innerHeight;
        const stackHeight = windowHeight - navbarHeight;
        document.getElementById('mainStack').style.height = stackHeight + 'px';
        return window.addEventListener('resize', () => {
            const navbarHeight = document.getElementById('navbar').clientHeight;
            const windowHeight = window.innerHeight;
            const stackHeight = windowHeight - navbarHeight;
            document.getElementById('mainStack').style.height = stackHeight + 'px';
        });
    }, []);

    return (
        <main className="flex-grow-1">
            <Header walletAddress={walletAddress} />
            <Stack id='mainStack' direction='horizontal' className='align-items-start p-2'>
                <Stack gap={4} className='h-100 overflow-y-scroll'>
                    <BalanceChart walletAddress={walletAddress} sanityTokens={sanityTokens} thirdWebTokens={thirdWebTokens} />
                    <Portfolio walletAddress={walletAddress} sanityTokens={sanityTokens} thirdWebTokens={thirdWebTokens} />
                </Stack>
                
                <Promos />
            </Stack>
        </main>
    );
}

export default Main;
