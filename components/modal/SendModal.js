import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import CoinControl from '../CoinControl';

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
                <Row className='m-0' style={{marginTop: '-1px'}}>
                    <div className="input-group p-0">
                        <span className="input-group-text bg-dark border-secondary text-light">Pay with <i className="lab la-ethereum text-primary"></i></span>
                        <input className='bg-dark form-control border-secondary border-start-0 text-light' placeholder='Address' type="text" />
                    </div>
                </Row>
                <Row className='m-0' style={{marginTop: '-1px'}}>
                    <Button>Continue</Button>
                </Row>
            </Row>
            
        </Container>
    );
}

export default SendModal;
