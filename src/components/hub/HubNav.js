import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function HubNav() {
  return (
    <Nav className="hubnav" variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" >
          Disabled
        </Nav.Link>
      </Nav.Item>
      <Form className="d-flex, searchbar">
        <Form.Control className="bar" type="search"placeholder="Search" />
        <Button variant="outline-success">Search</Button>
      </Form>
     
    </Nav>
    
  );
}

export default HubNav;