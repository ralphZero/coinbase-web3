import React, { useState, useEffect, useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Chart from 'chart.js/auto'

const BalanceChart = ({walletAddress, sanityTokens, thirdWebTokens}) => {
    const data = {
        labels: [
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
            'Jan',
        ],
        datasets: [
            {
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#3773f5',
                borderColor: '#3773f5',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#3773f5',
                pointBackgroundColor: '#3773f5',
                pointBorderWidth: 1,
                pointHoverRadius:5,
                pointHoverBackgroundColor: '#3773f5',
                pointHoverBorderColor: '#3773f5',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 72, 45, 67, 55, 42],
            },
        ]
    }

    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
    }

    const [walletBalance, setWalletBalance] = useState(0);
    
    const tokenToUSD = useMemo(() => {
        let obj = {};
        for(const token of sanityTokens) {
            obj[token.contractaddress] = Number(token.usdprice)
        }
        return obj;
    }, [sanityTokens])
    

    
    useEffect(() => {
        const calculateTotalBalance = async () => {
            const totalBalance = await Promise.all(
                thirdWebTokens.map(async (token) => {
                    const balance = await token.balanceOf(walletAddress);
                    return Number(balance.displayValue) * tokenToUSD[token.address]
                })
            )
            setWalletBalance(totalBalance.reduce((acc, balance) => acc + balance, 0));
        }
        return calculateTotalBalance();
    }, [walletAddress, tokenToUSD, thirdWebTokens]);

    return (
        <Container fluid>
            <Card bg='dark' border='secondary' text='light'>
                <Card.Body>
                    <Card.Subtitle className='text-muted mb-2'>Portfolio balance</Card.Subtitle>
                    <Card.Title>${walletBalance.toLocaleString()}</Card.Title>
                    <Container fluid className='p-0 m-0'>
                        <Line data={data} options={options} width={400} />
                    </Container>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default BalanceChart;
