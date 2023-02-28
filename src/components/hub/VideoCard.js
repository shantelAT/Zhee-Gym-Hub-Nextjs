
import React, { useEffect , useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function VideoCard(props) {
    const {ProdName} = props;
  return (
    <Card className='videocard ' href='/hubpage'>
      
        <Card.Img  className='videocard-image ' src="../videoimage.svg" />
      
      <div className='videocard-caption'>
        
        <Card.Img class="card-avatar" src='../aboutus.svg'/>
        
          <div className='videocard-body'>
            <Card.Body >
                <Card.Title className='videocard-caption1'> How to do Sumo Squats</Card.Title>
                <Card.Text className='videocard-caption2'> GymShark</Card.Text>
                <Card.Text className='videocard-caption2'> 2.2M views
                </Card.Text> 
            </Card.Body>
          </div>
      </div>
    </Card>
  );
}

export default VideoCard;