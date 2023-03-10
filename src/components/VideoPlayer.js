import React from 'react'
import ReactPlayer from 'react-player';

import Card from 'react-bootstrap/Card';
  
export default function VideoPlayer({atutorial}){
  console.log("tutorial", atutorial)
  const { title, description, author, tutorialVideoUrl, id, thumbnailsUrl, videoTag} = atutorial;
  console.log("author",author)
  console.log("title",title)
  return (
    <main>
        <video autoPlay loop controls type='video/mp4'  src={tutorialVideoUrl} style={{width:"100%"}}/>
        <h2 className='videocard-caption1'> {title} </h2>
        <p className='videocard-caption2'> {author}</p>
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


