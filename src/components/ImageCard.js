import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ImageCard() {
  return (
    <Card.Body className= "imagecard">
    <div  >
      <Card.Img className= "imagecard-image" src="../aboutus.svg" />
    </div>
    </Card.Body>
  );
}

export default ImageCard;