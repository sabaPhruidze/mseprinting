import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CardContainer } from "../style/HomeStyles";
import NavigateAndScroll from "./NavigateAndScroll";
import { fetchWWDCCardData, CARDS_DATA } from "../data/CardData";
import { WWDCCardType } from "../types/DataTypes";
import ImageWithSEO from "./ImageWithCEO";

// Type guard to check if the card is of type WWDCCardType
const isWWDCCardType = (card: string | WWDCCardType): card is WWDCCardType => {
  return (card as WWDCCardType).title !== undefined;
};

const WWDCCard: React.FC = () => {
  const [WWDCCardMainData, setWWDCCardMainData] = useState<WWDCCardType[]>([]);

  useEffect(() => {
    const getCardData = async () => {
      const data = await fetchWWDCCardData();
      if (data && data.length > 0) {
        setWWDCCardMainData(data);
      }
    };

    getCardData();
  }, []);

  return (
    <Container>
      <Row xs={1} sm={2} md={3} className="g-4">
        {(WWDCCardMainData.length > 0 ? WWDCCardMainData : CARDS_DATA).map(
          (card, idx) => {
            const imageSrc = isWWDCCardType(card)
              ? card.image
              : CARDS_DATA[idx];
            const title = isWWDCCardType(card)
              ? card.title
              : `Title ${idx + 1}`;
            const text = isWWDCCardType(card)
              ? card.text
              : `Description ${idx + 1}`;
            const path = isWWDCCardType(card) ? card.link : "#";

            return (
              <NavigateAndScroll path={path} key={idx}>
                <Col>
                  <CardContainer className="h-100">
                    <ImageWithSEO
                      src={imageSrc}
                      alt={title}
                      title={title}
                      loading="eager"
                    />
                    <CardContainer.Body
                      style={{ height: 200, overflow: "hidden" }}
                    >
                      <CardContainer.Title>{title}</CardContainer.Title>
                      <CardContainer.Text>{text}</CardContainer.Text>
                    </CardContainer.Body>
                  </CardContainer>
                </Col>
              </NavigateAndScroll>
            );
          }
        )}
      </Row>
    </Container>
  );
};

export default WWDCCard;
