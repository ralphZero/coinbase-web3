import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { coins } from '../static/coins';
import CoinItem from './CoinItem';

const Portfolio = ({walletAddress, sanityTokens, thirdWebTokens}) => {
    
    return (
        <Container fluid>
            <Card bg='dark' border='secondary'>
                <Card.Body className='p-0'>
                    <Table hover variant='dark' className='rounded'>
                        <thead>
                            <tr className='fs-5'>
                                <th colSpan={5}>My Assets</th>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <th>Balance</th>
                                <th>Price</th>
                                <th>Allocation</th>
                                <th>
                                    <Container className='text-white p-0'>
                                        <BsThreeDotsVertical />
                                    </Container>
                                </th>
                            </tr>
                        </thead>
                        <tbody className='align-middle'>
                            {
                                coins.map((coin, index) => {
                                    return (
                                        <tr key={index}>
                                            <CoinItem coin={coin}/>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Portfolio;
