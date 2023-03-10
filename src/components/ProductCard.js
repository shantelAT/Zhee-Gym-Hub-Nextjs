import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";

function ProductCard({product}) {
  
  const { description, name, src, productImage} = product;

  return (
    <a className='productlink' href={src}>
    <Card  className='productcard'>
      <Card.Img  className='productcard-image' src={productImage} />
      <Card.Body className='productcard-body'>
        <h3 style={{color:"black"}} >{name}</h3>
        <Card.Text style={{color:"black"}} >
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
    </a>
  );
}

export default ProductCard;