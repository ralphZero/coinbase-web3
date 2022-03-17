import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-modal';
import { useRouter } from 'next/router';
import Link from 'next/link';
import TransferModal from './modal/TransferModal';

Modal.setAppElement('#__next');


const Header = ({ walletAddress }) => {

    const router = useRouter();

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            transform: 'translate(-50%, -50%)',
            backgroudColor: '#0a0b0d',
            padding: 0,
            border: 'none',
        },
        overlay: {
            backgroundColor: 'rgba(10,11,13,0.75)'
        }
    }

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
                    {/* eslint-disable-next-line @next/next/link-passhref*/}
                    <Link href={'/?transfer=1'} passHref={false}>
                        <Button variant='outline-light'>Send / Receive</Button>
                    </Link>
                </Form>
            </Container>
            <Modal style={customStyles} isOpen={!!router.query.transfer} onRequestClose={() => router.push('/')}>
                <TransferModal />
            </Modal>
        </Navbar>
    );
}

export default Header;
