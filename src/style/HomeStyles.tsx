import styled from "styled-components";
import { RowFlex, ColumnFlex } from "./GlobalStyle";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

export const WWDCContainer = styled(RowFlex)`
  width: 100%;
  height: 900px;
  padding: 0 40px;
`;

export const WWDCCSpecialitiesContainer = styled(ColumnFlex)`
  width: 400px;
  height: 260px;
  color: ${(props) => props.theme.DarkBlue};
  padding-right: 20px;
`;

export const WWDCTitle = styled.h2`
  font-weight: 700;
  margin-bottom: 20px;
  font-size: 28px;
`;

export const WWDCParagraph = styled.p`
  font-weight: 400;
  font-size: 18px;
  text-align: center;
`;
export const CarouselOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;
export const CarouselControl = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

export const CarouselImg = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
`;

export const CarouselIcon = styled.span`
  width: 20px;
  height: 20px;
  background-size: 100%, 100%;
`;

export const CarouselTitle = styled.h3`
  margin: 0;
  margin-left: 150px;
  font-size: 36px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
`;
export const CarouselContent = styled.p`
  margin-top: 10px;
  margin-left: 150px;
  font-size: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  width: 600px;
`;

export const CarouselButton = styled.button`
  background-color: #13a3e0;
  color: ${(props) => props.theme.White};
  border: 1px solid;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 800;
  cursor: pointer;
  transition: 0.3s ease;
  margin-left: 150px;
  margin-top: 10px;
  border-radius: 20px;
  &:hover {
    background-color: #102948; /* DarkBlue */
    color: #1d6a8c; /* MediumBlue */
  }
  &:focus {
    transform: scale(0.9);
  }
`;

export const CardContainer = styled(Card)`
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  }
`;