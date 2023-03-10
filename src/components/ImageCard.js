import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ImageCard({cardBody, cardImage, src}) {
  return (
    <div className= {cardBody}>
    <div  >
      <Card.Img className= {cardImage} src={src} />
    </div>
    </div>
  );
}

export default ImageCard;