import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VideoCard from './VideoCard';
import ListGroup from 'react-bootstrap/ListGroup';


export default function VideoGrid({videos}) {
  console.log(videos);
  return (
    <div className='verticalvideogrid'>
      <ListGroup>
      {videos?.map((video) => (
        <ListGroup.Item key={video.id} >
          <VideoCard VideoName={video.name} /> 
        </ListGroup.Item>))}
      </ListGroup>
    </div>
  );
}

