import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container"; // Import Container
import CardData from "../data/CardData";
function WWDCCard() {
  const DATA = CardData();
  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        {DATA.map((card, idx) => (
          <Col key={idx}>
            <Card className="h-100">
              <Card.Img variant="top" src={card.imgSrc} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default WWDCCard;
