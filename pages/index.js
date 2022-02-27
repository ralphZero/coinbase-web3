import { useWeb3 } from '@3rdweb/hooks';
import Dashboard from './dashboard';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  const { address, connectWallet } = useWeb3();

  return (
    <Container fluid className='bg-dark vh-100 overflow-hidden'>
    { address ? (
        <Dashboard address={address} />
      ) : (
        <Row className='justify-content-center h-100 w-100'>
          <Col className='d-flex flex-column justify-content-center' md={{ span: 6, offset: 0 }}>
          <Container className='d-inline-block text-center p-0' fluid>
            <Button onClick={() => connectWallet('injected')}>Connect Wallet</Button>
            <div className='mt-4 text-white'>
              You will need Chrome or Firefox to be <br/> able to run this application.
            </div>
          </Container>
            
          </Col>
          
        </Row>
      )
    }
    </Container>
  )
}