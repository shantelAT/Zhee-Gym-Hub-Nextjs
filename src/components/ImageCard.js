import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ImageCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../smallcard.png" />
    </Card>
  );
}

export default ImageCard;