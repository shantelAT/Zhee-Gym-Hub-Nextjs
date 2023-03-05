import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ImageCard({cardBody, cardImage}) {
  return (
    <Card.Body className= {cardBody}>
    <div  >
      <Card.Img className= {cardImage} src="../aboutus.svg" />
    </div>
    </Card.Body>
  );
}

export default ImageCard;