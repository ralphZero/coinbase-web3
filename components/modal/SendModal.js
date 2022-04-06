import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CoinControl from '../CoinControl';
import Image from 'next/image';
import eth from '../../assets/eth.png'

const SendModal = () => {
    return (
        <Container className='pb-1 m-0' fluid>
            <Row>
                <CoinControl />
            </Row>
            <Row className='d-flex flex-column mt-4'>
                <Row className='m-0'>
                    <div className="input-group p-0">
                        <span className="input-group-text bg-dark border-secondary text-light">To <i className="lab la-ethereum text-primary"></i></span>
                        <input className='bg-dark form-control border-secondary border-start-0 text-light' placeholder='Address' type="text" />
                    </div>
                </Row>
                <Row className='m-0'>
                    <div className="input-group p-0" style={{marginTop: '-1px'}}>
                        <span className="input-group-text bg-dark border-secondary text-light pe-0">Pay with <span className='d-inline-flex align-items-center ps-2 pe-1'><Image src={eth} height={24} width={24} alt='' /></span></span>
                        <input className='bg-dark form-control border-secondary border-start-0 text-light ps-0' placeholder='Address' type="text" />
                    </div>
                </Row>
                <Row className='m-0 mt-2'>
                    <Button>Continue</Button>
                </Row>
                <Row className='m-0 py-3'>
                    <div className='m-0 p-0 d-flex justify-content-between'>
                        <span className='text-muted'>ETH Balance</span>
                        <span className='text-muted'>1.2 ETH</span>
                    </div>
                </Row>
            </Row>
            
        </Container>
    );
}

export default SendModal;
