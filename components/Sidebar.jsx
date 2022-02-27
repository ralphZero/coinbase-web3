import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { navItems } from '../static/navItems';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import logo from '../assets/cb-logo.png';

const Sidebar = () => {
    const [active, setActive] = useState(0);

    return (
        <Container className="h-100 p-0 m-0 border-end border-secondary" style={{width: '250px', minWidth: '12rem'}}>
            <Image className="p-3" src={logo} objectFit='contain' objectPosition='left' alt='logo'/>
            <ListGroup variant='flush' className="p-3">
                {
                    navItems.map((item, index) => (
                        <ListGroup.Item action onClick={() => setActive(index)} active={active === index ? true : false} className='bg-transparent fs-6 py-2 my-2 border-0 rounded-3 sidebar_item' key={index}>
                            <Row>
                                <Col className="flex-grow-0 flex-shrink-1">
                                    {item.icon}
                                </Col>
                                <Col className="flex-grow-1">
                                    {item.title}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </Container>
    );
}

export default Sidebar;
