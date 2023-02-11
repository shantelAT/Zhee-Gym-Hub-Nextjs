import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextCard from "./TextCard";
import ImageCard from "./ImageCard";

function ParagraphGridImageGrid() {
  return (
    <Container>
      <Row>
        <Col>
        <TextCard></TextCard>
        </Col>
        <Col>
        <ImageCard></ImageCard>
        </Col>
      </Row>
    </Container>
  );
}

export default ParagraphGridImageGrid;