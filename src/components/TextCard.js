import Card from 'react-bootstrap/Card';

function TextCard() {
  return (
    <Card className="textcard" >
      <Card.Body>
        <Card.Title className="textcard-title">What is Zheé Gym Hub?</Card.Title>
        <Card.Text >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
        </Card.Text>
        <Card.Link className='textcard-btn' href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default TextCard;