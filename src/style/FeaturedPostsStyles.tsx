import styled from "styled-components";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Container = styled.div`
  position: relative;
  min-width: 100%;
  padding: 10px 80px;
  margin-bottom: 80px;
  background-color: ${(props) => props.theme.MediumGray};
  @media (max-width: 1024px) {
    padding: 40px;
  }
  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

export const CarouselItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 300px;
`;

export const StyledCard = styled(Card)`
  min-width: 23%;
  margin: 1%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  height: 250px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }

  .card-body {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40%;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    padding: 10px;
    text-align: left;
  }
`;

export const CardImage = styled.div<{ src: string }>`
  height: 100%;
  width: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

export const CardTitle = styled(Card.Title)`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const CardText = styled(Card.Text)`
  font-size: 1rem;
  color: white;
`;

export const CarouselControl = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.7);
  border: none;
  font-size: 2rem;
  z-index: 1;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.Black};
  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }

  &:focus {
    outline: none;
  }
`;

export const CarouselIcon = styled.span`
  width: 20px;
  height: 20px;
  background-size: 100%, 100%;
`;
