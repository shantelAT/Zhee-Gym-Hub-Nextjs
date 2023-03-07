import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ImageCard({cardBody, cardImage, src}) {
  return (
    <Card.Body className= {cardBody}>
    <div  >
      <Card.Img className= {cardImage} src={src} />
    </div>
    </Card.Body>
  );
}

export default ImageCard;