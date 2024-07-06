import styled from "styled-components";
import { Card } from "react-bootstrap";
import "../style/CustomCarousel.css";

export const Container = styled.div`
  min-height: 500px;
  position: relative;
  padding: 0 100px;
`;

export const CarouselItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledCard = styled(Card)`
  min-width: 23%;
  margin: 1%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  height: 100%;

  &:hover {
    transform: scale(1.05);
  }

  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`;

export const CardTitle = styled(Card.Title)`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const CardText = styled(Card.Text)`
  font-size: 1rem;
  color: gray;
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 2rem;
  z-index: 1;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const PrevButton = styled(ArrowButton)`
  left: -50px;
`;

export const NextButton = styled(ArrowButton)`
  right: -50px;
`;
export const CarouselIcon = styled.span`
  width: 20px;
  height: 20px;
  background-size: 100%, 100%;
`;
