import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CardContainer } from "../style/HomeStyles";
import NavigateAndScroll from "./NavigateAndScroll";
import { fetchWWDCCardData, CARDS_DATA } from "../data/CardData";
import { CarouselType } from "../types/DataTypes";
import ImageWithSEO from "./ImageWithCEO";
import styled from "styled-components";

const CardImageWrapper = styled.div`
  height: 250px;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const WWDCCard: React.FC = () => {
  const [WWDCCardMainData, setWWDCCardMainData] = useState<CarouselType[]>([]);

  const getCardData = useCallback(async () => {
    const data = await fetchWWDCCardData();
    if (data && data.length > 0) {
      setWWDCCardMainData(data);
    }
  }, []);

  useEffect(() => {
    getCardData();
  }, [getCardData]);

  const memoizedCardData = useMemo(() => WWDCCardMainData, [WWDCCardMainData]);

  return (
    <Container>
      <Row xs={1} sm={2} md={3} className="g-4">
        {memoizedCardData.map((card, idx) => (
          <NavigateAndScroll path={card.link} key={idx}>
            <Col>
              <CardContainer className="h-100">
                <CardImageWrapper>
                  <ImageWithSEO
                    src={CARDS_DATA[idx]?.src}
                    alt={CARDS_DATA[idx]?.alt}
                    title={CARDS_DATA[idx]?.title}
                    loading="eager"
                  />
                </CardImageWrapper>
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
};

export default WWDCCard;
