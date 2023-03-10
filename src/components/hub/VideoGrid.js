import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VideoCard from './VideoCard';
import {videosTutorials, docs} from "@/pages/hubpage";


export default function VideoGrid({videosTutorials}) {  //collect list of videos from firebase storage


  return (
    <div className='videogrid'>
      <Row>   
       {videosTutorials?.map((eachtutorial) => (
        <Col key={{eachtutorial}.id} > 
          <VideoCard tutorial={eachtutorial} /> 
        </Col>
        
        ))}
      </Row>
    </div>
    
    
  );
  
}


