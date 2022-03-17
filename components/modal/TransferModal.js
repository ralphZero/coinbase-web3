import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import SendModal from './SendModal';
import ReceiveModal from './ReceiveModal';

const TransferModal = () => {
    const [ activeKey, setActiveKey ] = useState('0');

    const currentComponent = (key) => {
        switch (key) {
            case '0':
                return <SendModal />
            case '1':
                return <ReceiveModal />
            default:
                return <SendModal />
        }
    }

    return (
        <Card style={{width: '400px', height: '100%'}} bg='dark' border='secondary' text='light'>
            <Card.Body className='p-0'>
                <Nav fill className='flex-row custom-nav' variant="tabs" activeKey={activeKey} onSelect={setActiveKey}>
                    <Nav.Item>
                        <Nav.Link className='custom-nav-item' eventKey={0}>Send</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='custom-nav-item' eventKey={1}>Receive</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Container>
                    { currentComponent(activeKey) }
                </Container>
            </Card.Body>
            
        </Card>
    );
}

export default TransferModal;
