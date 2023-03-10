import React from 'react'
import ReactPlayer from 'react-player';

import Card from 'react-bootstrap/Card';
  
export default function VideoPlayer({atutorial}){
 
  const { title, description, author, tutorialVideoUrl, id, thumbnailsUrl, videoTag} = atutorial;
 
  return (
    <main className='tutorialPlayer' >
      <div>
      <video autoPlay loop controls type='video/mp4'  src={tutorialVideoUrl} style={{width:"100%"}}/>
        <h2  className='videoplayer-caption1'> {title} </h2>
        <div className='videoplayer-caption' >
          <img className="card-avatar" src='../aboutus.svg'/>
        <p className='videoplayer-caption2'> {author}</p>
        </div>
        <p className='videoplayer-caption2'> {description}</p>

      </div>
       <div className='recommendedvideos'>

       </div>
       
    </main>
    
             
  
  )
}

 {/** 
    <main className='videoplayer' >
               
                <Card className='videocardplayer'  > 
                    <div className='videocard-caption'>
                      <Card.Img className="card-avatar" src='../aboutus.svg'/>
                        <div className='videocard-body'>
                          <Card.Body >
                              <Card.Title className='videocard-caption1'> {title} </Card.Title>
                              <Card.Text className='videocard-caption2'> {author}</Card.Text>
                          </Card.Body>
                        </div>
                    </div>
                    <Card.Body>
                      <Card.Text  className='videocard-caption3'>{description}</Card.Text></Card.Body>
                </Card>  
         
    </main>*/}


