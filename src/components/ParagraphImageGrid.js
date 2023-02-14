import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextCard from "./TextCard";
import ImageCard from "./ImageCard";

function ParagraphGridImageGrid() {
  return (
    <div className='aboutus'>
      <Row className='aboutus-row'>
        <Col>
        <TextCard ></TextCard>
        </Col>
        <Col>
        <ImageCard></ImageCard>
        </Col>
      </Row>
    </div>
  );
}

export default ParagraphGridImageGrid;