
import React, { useEffect , useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function VideoCard({tutorial}){

  console.log("tutorial", tutorial)
  const { author, description, id, title, tutorialVideoUrl} = tutorial;

  return (
    <Card className='videocard ' href='/hubpage'>
      
        <Card.Img  className='videocard-image ' src={tutorialVideoUrl} />
      
      <div className='videocard-caption'>
        
        <Card.Img class="card-avatar" src='../aboutus.svg'/>
        
          <div className='videocard-body'>
            <Card.Body >
                <Card.Title className='videocard-caption1'> {title}</Card.Title>
                <Card.Text className='videocard-caption2'> {author}</Card.Text>
                <Card.Text className='videocard-caption2'> {description}</Card.Text> 
            </Card.Body>
          </div>
      </div>
    </Card>
  );
}

export default VideoCard;