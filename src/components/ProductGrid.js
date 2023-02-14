import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from './Productcard';


export default function GridAutoLayout({products}) {
  return (
    <div className='productgrid'>
      <Row  >
      {products?.map((product) => (
      <Col key={product.id} >
        <ProductCard product={product.name} />
      </Col>
    ))}
      </Row>
    </div>
  );
}


export async function getProductName(){
    const products = await fetch('http://localhost:3000/api/products').then(response => response.json());
    console.log(products)
    return {
        props: {
            products
        }
    }
}
