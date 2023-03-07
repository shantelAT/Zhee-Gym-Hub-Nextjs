import React from 'react'
import ReactPlayer from 'react-player'

const router = useRouter()
const tutorialId = router.params.id

export default function VideoPlayer({tutorialId}){
  const {  title, description, author, tutorialVideoUrl, id, thumbnailsUrl, videoTag} = tutorialId;
  console.log(tutorial)
  return (
    <main className='videoplayer' >
        <div className='homeplayer '>
            <div className='mainplayer'>
                <ReactPlayer className='mainplayer' url='https://www.youtube.com/watch?v=wWgIAphfn2U' />
                <h2>{author}</h2>
            </div>

            <div className='mainplayer-2'>

            </div>
        </div>
        <div className='blog-recom'>
            
        </div>
        
    </main>
    
  )
}


