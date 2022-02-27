import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Header = ({ walletAddress }) => {
    return (
        <Navbar id='navbar' className="border-bottom border-secondary" bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand className='fs-4'>
                    Assets
                </Navbar.Brand>
                
                <Form className='d-flex gap-3'>
                    <Col className='me-3'>
                        <Row className='text-success fs-6 fw-bold'>Wallet Connected</Row>
                        <Row className='text-secondary'>{walletAddress.slice(0, 5)+'...'+walletAddress.slice(walletAddress.length - 4)}</Row>
                    </Col>
                    <Button>Buy / Sell</Button>
                    <Button variant='outline-light'>Send / Receive</Button>
                </Form>
            </Container>
        </Navbar>
    );
}

export default Header;
