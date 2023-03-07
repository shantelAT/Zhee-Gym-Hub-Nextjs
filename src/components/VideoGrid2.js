import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function VideoGridFour() {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        
        <Col>
          <VideoCard tutorial={eachtutorial} /> 
        </Col>
      ))}
    </Row>
  );
}

export default VideoGridFour;