import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import { BsThreeDotsVertical } from 'react-icons/bs';


const CoinItem = ({ coin}) => {
    return (
        <>
            <td>
                <Container fluid>
                    <Row className='align-items-center'>
                        <Col xs={2} className='d-inline-flex justify-content-center'>
                            <Image width={36} height={36} src={coin.logo} objectFit='cover' alt='coin_logo' />
                        </Col>
                        <Col className='flex-grow-1'>
                            <Row className='w-100'>{coin.name}</Row>
                            <Row className='text-secondary'>{coin.sign}</Row>
                        </Col>
                    </Row>
                </Container>
            </td>
            <td>
                <Container fluid>
                    <Row className='align-items-center'>
                        <Col className='flex-grow-1'>
                            <Row className='w-100'>${coin.balanceUsd}</Row>
                            <Row className='text-secondary'>{coin.balanceCoin}</Row>
                        </Col>
                    </Row>
                </Container>
            </td>
            <td>
                <Container fluid>
                    <Row className='align-items-center'>
                        <Col className='flex-grow-1'>
                            <Row className='w-100'>${coin.priceUsd}</Row>
                            <Row className={coin.change > 0 ? 'text-success' : 'text-danger'}>{coin.change > 0 ? '+'+coin.change : coin.change}</Row>
                        </Col>
                    </Row>
                </Container>
            </td>
            <td>
                <Container fluid>
                    <Row>
                        <Col>
                            <span className='w-100'>{coin.allocation}%</span>
                        </Col>
                    </Row>
                </Container>
            </td>
            <td>
                <Container className='text-white p-0'>
                    <BsThreeDotsVertical />
                </Container>
            </td>
        </>
        

    );
}

export default CoinItem;
