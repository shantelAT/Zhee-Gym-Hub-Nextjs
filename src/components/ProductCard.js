import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductModal from "./ProductModal"

function ProductCard(props) {
    const { ProdName} = props;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../smallcard.png" />
      <Card.Body>
        <Card.Title>{ProdName}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <ProductModal></ProductModal>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;