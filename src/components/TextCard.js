import Card from 'react-bootstrap/Card';

function TextCard({cardclassName, titleclassName, textclassName, showElement }) {
  return (
    <Card className={cardclassName} >
      <Card.Body>
        <Card.Title className={titleclassName}>What is Zheé Gym Hub?</Card.Title>
        <Card.Text className={textclassName}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
        </Card.Text>
        {showElement ? <Card.Link className='textcard-btn hidden' href="#">Card Link</Card.Link> : <Card.Link className='d-none textcard-btn hidden' href="#">Card Link</Card.Link>}
      </Card.Body>
    </Card>
  );
}

export default TextCard;