import styled from "styled-components";
import { RowFlex, ColumnFlex } from "./GlobalStyle";

export const WWDCContainer = styled(RowFlex)`
  width: 100%;
  height: 1200px;
`;

export const WWDCCSpecialitiesContainer = styled(ColumnFlex)`
  width: 400px;
  height: 800px;
  color: ${(props) => props.theme.DarkBlue};
`;

export const WWDCTitle = styled.h2`
  font-weight: 800;
  margin-bottom: 50px;
`;

export const WWDCParagraph = styled.p`
  font-weight: 400;
  font-size: 20px;
  text-align: center;
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

export const CarouselIcon = styled.span`
  width: 20px;
  height: 20px;
  background-size: 100%, 100%;
`;
