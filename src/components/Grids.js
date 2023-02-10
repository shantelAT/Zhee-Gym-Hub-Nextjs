import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from './Productcard';

const products = ["shirt", "blouse", "Shoes", "tights", "tshirt", "soaks"]

function GridAutoLayout(products) {
  return (
    <Container>
      <Row>
      {products.map((product) => (
      <Col key={product.id} md={4}>
        <ProductCard product={product} />
      </Col>
    ))}
      </Row>
    </Container>
  );
}

export default GridAutoLayout;