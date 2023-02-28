import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from './Productcard';


export default function GridAutoLayout({item, products}) {
  return (
    <div className='productgrid'>
      <Row  >
      {products?.map(({item}) => (
      <Col key={{item}.id} >
        <ProductCard product={{item}.name} />
      </Col>
    ))}
      </Row>
    </div>
  );
}


