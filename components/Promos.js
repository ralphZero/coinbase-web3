import React from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';

const Promos = () => {
    return (
        <Container style={{width: '250px', minWidth: '12rem'}} className="h-100 p-0">
            <Stack gap={4}>
                <Card bg='dark' border='secondary' text='light'>
                    <Card.Body>
                        <Card.Title>Yield earned</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Earn up to 2.84% APY on your crypto</Card.Subtitle>
                        <Card.Text className="small d-flex justify-content-between align-items-center">$0.000066<small className='text-muted'>2.84% APY</small></Card.Text>
                    </Card.Body>
                </Card>
                <Card bg='dark' border='secondary' text='light'>
                    <Card.Body>
                        <Card.Title>Learn and earn</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Earn up to 2.84% APY on your crypto</Card.Subtitle>
                        <Card.Link className='small' href="#">Verify identity</Card.Link>
                    </Card.Body>
                </Card>
            </Stack>
        </Container>
    );
}

export default Promos;
