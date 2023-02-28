import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard(props) {
    const { ProdName} = props;
  return (
    <Card className='productcard'>
      <Card.Img  className='productcard-image' src="../aboutus.svg" />
      <Card.Body className='productcard-body'>
        <Card.Title >{ProdName}</Card.Title>
        <Card.Text>
          Some quick example text to do what text do.
        </Card.Text>
        <Button className='productcard-btn'>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;