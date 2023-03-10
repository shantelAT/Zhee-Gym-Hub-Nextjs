import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from '@/components/ProductCard';


export default function GridAutoLayout({products}) {

  return (
    <div className='productgrid-product'>
      <Row  >
      {products?.map((item) => (
    
      <Col key={item.id} >
        <ProductCard product={item} />
      </Col>
    ))}
      </Row>
    </div>
  );
}


