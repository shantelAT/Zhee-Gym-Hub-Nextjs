import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VideoCard from './VideoCard';


export default function VideoGrid({row,col,videos}) {
 
  return (
    <div className='productgrid'>
      <Row>  
      {videos?.map((video) => (
        
      <Col key={video.id} >
        
        <VideoCard VideoName={video.name} />
      </Col>
    ))}
      </Row>
    </div>
  );
}


