import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CardContainer } from "../style/HomeStyles";
import NavigateAndScroll from "./NavigateAndScroll";
import { fetchWWDCCardData, CARDS_DATA } from "../data/CardData";
import { WWDCCardType } from "../types/DataTypes";
import ImageWithSEO from "./ImageWithCEO"; // Fixed typo here
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
        {WWDCCardMainData.map((card, idx) => {
          // Use images from CARDS_DATA and other data from WWDCCardMainData
          return (
            <NavigateAndScroll path={card.link} key={idx}>
              <Col>
                <CardContainer className="h-100">
                  <CardImageWrapper>
                    <ImageWithSEO
                      src={CARDS_DATA[idx]?.src} // Use image from CARDS_DATA
                      alt={CARDS_DATA[idx]?.alt} // Use title from WWDCCardMainData for alt
                      title={CARDS_DATA[idx]?.title} // Use title from WWDCCardMainData
                      loading="eager" // Eager loading for the first two images
                    />
                  </CardImageWrapper>
                  <CardContainer.Body
                    style={{ height: 200, overflow: "hidden" }}
                  >
                    <CardContainer.Title>{card.title}</CardContainer.Title>
                    <CardContainer.Text>{card.text}</CardContainer.Text>
                  </CardContainer.Body>
                </CardContainer>
              </Col>
            </NavigateAndScroll>
          );
        })}
      </Row>
    </Container>
  );
};

export default WWDCCard;
