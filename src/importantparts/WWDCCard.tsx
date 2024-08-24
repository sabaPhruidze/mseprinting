import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CardContainer } from "../style/HomeStyles";
import NavigateAndScroll from "./NavigateAndScroll";
import { fetchWWDCCardData, CARDS_DATA } from "../data/CardData";
import { WWDCCardType } from "../types/DataTypes";
import ImageWithSEO from "./ImageWithCEO";
import styled from "styled-components";

// Create a styled wrapper for the card images with fixed height
const CardImageWrapper = styled.div`
  height: 250px;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover; // Ensure the image covers the area while maintaining aspect ratio
  }
`;

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
            const title = isWWDCCardType(card) ? card.title : ``;
            const text = isWWDCCardType(card) ? card.text : ``;
            const path = isWWDCCardType(card) ? card.link : "#";

            return (
              <NavigateAndScroll path={path} key={idx}>
                <Col>
                  <CardContainer className="h-100">
                    <CardImageWrapper>
                      <ImageWithSEO
                        src={CARDS_DATA[idx]}
                        alt={title}
                        title={title}
                        loading="eager"
                      />
                    </CardImageWrapper>
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
