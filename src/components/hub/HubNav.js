import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function HubNav() {
  return (
    <Nav className="hubnav"  defaultActiveKey="/home">
      <Form className="searchbar">
        <Form.Control className="bar" type="search"placeholder="Search" />
        <Button >Search</Button>
      </Form>
     
    </Nav>
    
  );
}

export default HubNav;