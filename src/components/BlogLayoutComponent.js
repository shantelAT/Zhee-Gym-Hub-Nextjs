import React, { useEffect , useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function BlogLayoutCard({ablog}){
  console.log("this is a",ablog)
  const { blogTitle, BlogBody, createdAt, author, id, BlogImage, BlogTag} = ablog;
  console.log(createdAt)

    return (
      
    <Card  className="blogpage-main">
      <div className="blogpage-single">
      <Card.Body>
      <div className='blogcard-single-header'>
        <img className="card-avatar" src='../aboutus.svg'/>
          <div className='blogcard-single-author'>
          <Card.Text className='videocard-caption2'> {author}</Card.Text>
          <Card.Text className='videocard-caption2'> Date of Published</Card.Text>
          </div>
      </div >

      <div className='blogcard-image-single' >
        <img  className='blogcard-image-singleblog' src={BlogImage} />
      </div>
    <div className="blogcard-body-single">
     
          <Card.Title className="blogcard-body-title">{blogTitle}</Card.Title>
          <div className='blogcard-body-single2'>
          <Card.Text className="blogcard-body-text">{BlogBody}</Card.Text>
          <Card.Link className='d-none textcard-btn hidden' href="#"  >Card Link</Card.Link>
        </div>
    </div>
      </Card.Body>
      </div>
      
    </Card>
    );
    }
    
    export default BlogLayoutCard;