import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const CoinControl = () => {

    const [amount, setAmount] = useState(0);

    return (
        <Container className="p-0 m-0" fluid>
            <Col>
                <Row className='py-3'>
                    <Col className='p-0 m-0'>
                        <input className='w-100 p-0 fs-1 text-end bg-transparent border-0 text-secondary' value={amount} onChange={(e) => setAmount(e.target.value)} type='number' />
                    </Col>
                    <Col className='d-flex align-items-center px-3'>
                        <div className='fs-2 lh-base text-uppercase text-primary'>eth</div>
                    </Col>
                </Row>
                <Row>
                    <div className='text-center text-secondary'>
                        Amount is a required field
                    </div>
                </Row>
            </Col>
        </Container>
    );
}

export default CoinControl;
