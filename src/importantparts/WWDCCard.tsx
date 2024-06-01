import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CardContainer } from "../style/HomeStyles";
import CardData from "../data/CardData";
function WWDCCard() {
  const DATA = CardData();
  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {DATA.map((card, idx) => (
          <Col key={idx}>
            <CardContainer className="h-100">
              <CardContainer.Img
                variant="top"
                src={card.imgSrc}
                style={{ height: 180, objectFit: "cover" }}
              />
              <CardContainer.Body>
                <CardContainer.Title>{card.title}</CardContainer.Title>
                <CardContainer.Text>{card.content}</CardContainer.Text>
              </CardContainer.Body>
            </CardContainer>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default WWDCCard;
