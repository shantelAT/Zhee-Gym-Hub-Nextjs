import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";

function ProductCard({product}) {
  console.log("products from card", product)
  const { description, name, src, productImage} = product;

  return (
    <a className='productlink' href={src}>
    <Card  className='productcard'>
      <Card.Img  className='productcard-image' src={productImage} />
      <Card.Body className='productcard-body'>
        <Card.Title >{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
    </a>
  );
}

export default ProductCard;