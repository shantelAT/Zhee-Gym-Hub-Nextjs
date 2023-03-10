
import React, { useEffect , useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function VideoCard({tutorial}){

  const {title, description, author, tutorialVideoUrl, id, thumbnailsUrl, videoTag} = tutorial;

  return (
    <a href={`/tutorial/${id}`}>
    <Card className='videocard'  >
      
      <Card.Img  className='videocard-image ' src={thumbnailsUrl} /> 
        
          <div className='videocard-body'>
          <Card.Img className="card-avatar videocard-caption" src='../aboutus.svg'/>
            <Card.Body >
                <Card.Title className='videocard-caption1'> {title}</Card.Title>
                <Card.Text className='videocard-caption2'> {author}</Card.Text>
            </Card.Body>
          </div>
      
    </Card>
    </a>
  );
}

export default VideoCard;