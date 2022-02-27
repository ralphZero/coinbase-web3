import React from 'react';
import Container from 'react-bootstrap/Container';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';

const Dashboard = ({address}) => {
  return (
      <Container fluid className="p-0 m-0 d-flex h-100">
        <Sidebar />
        <Main walletAddress={address} />
      </Container>
  )
}

export default Dashboard;
