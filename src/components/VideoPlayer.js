import React from 'react'
import ReactPlayer from 'react-player'
  
export default function VideoPlayer(){
  return (
    <main className='videoplayer' >
        <div className='homeplayer '>
            <div className='mainplayer'>
                <ReactPlayer className='mainplayer' url='https://www.youtube.com/watch?v=wWgIAphfn2U' />
            </div>

            <div className='mainplayer-2'>

            </div>
        </div>
        <div className='blog-recom'>
            
        </div>
        
    </main>
    
  )
}


