import React, { useEffect , useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BlogLayoutCard(){

    return (

    <Card  >
      <div className="blogpage-single">
      <Card.Body>
      <div className='blogcard-single'>
          <Card.Img class="card-avatar" src='../aboutus.svg'/>
          <div >
          <Card.Text className='videocard-caption2'> author</Card.Text>
          <Card.Text className='videocard-caption2'> Date of Published</Card.Text>
          </div>
      </div  >

      <div className='blogcard-image-single' >
        <img  className='blogcard-image-single' src='../aboutus.svg' />
      </div>
    <div className="blogcard-body-single">
     
          <Card.Title className="">What is Zheé Gym Hub?</Card.Title>
          <div className='blogcard-body-single2'>
          <Card.Text >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea  Excepteur sint occaecat.
          </Card.Text>
          <Card.Link className='d-none textcard-btn hidden' href="#">Card Link</Card.Link>
        </div>
    </div>
      </Card.Body>
      </div>
      
    </Card>
    );
    }
    
    export default BlogLayoutCard;