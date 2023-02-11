import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextCard from "./TextCard";
import ImageCard from "./ImageCard";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function FooterGrid() {
  return (
    <>
  
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src='../zheé.svg'
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Zheé Gym Hub
          </Navbar.Brand>
        </Container>
        < Nav className="justify-content-end" activeKey="/home">
        < Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      
      <Container>
        <TextCard></TextCard>
      </Container>
      </Navbar>
    </>
  );
}


export default FooterGrid;