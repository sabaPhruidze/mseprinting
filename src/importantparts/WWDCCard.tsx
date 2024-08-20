import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CardContainer } from "../style/HomeStyles";
import NavigateAndScroll from "./NavigateAndScroll";
import { fetchWWDCCardData } from "../data/CardData";
import { WWDCCardType } from "../types/DataTypes";

function WWDCCard() {
  const [WWDCCardMainData, setWWDCCardMainData] = useState<WWDCCardType[]>([]);

  useEffect(() => {
    const getCarouselData = async () => {
      const data = await fetchWWDCCardData();

      if (data && data.length > 0) {
        setWWDCCardMainData(data);
      }
    };

    getCarouselData();
  }, []);

  return (
    <Container>
      <Row xs={1} sm={2} md={3} className="g-4">
        {WWDCCardMainData.map((card, idx) => (
          <NavigateAndScroll path={card.link} key={idx}>
            <Col>
              <CardContainer className="h-100">
                <CardContainer.Img
                  variant="top"
                  src={card.image}
                  style={{ height: 200, objectFit: "fill" }}
                />
                <CardContainer.Body style={{ height: 200, overflow: "hidden" }}>
                  <CardContainer.Title>{card.title}</CardContainer.Title>
                  <CardContainer.Text>{card.text}</CardContainer.Text>
                </CardContainer.Body>
              </CardContainer>
            </Col>
          </NavigateAndScroll>
        ))}
      </Row>
    </Container>
  );
}

export default WWDCCard;
