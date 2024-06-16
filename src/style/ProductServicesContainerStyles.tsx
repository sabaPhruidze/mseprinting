import styled from "styled-components";
import { RowFlex, ColumnFlex } from "./GlobalStyle";
export const ProductsServicesContainerStyle = styled(RowFlex)`
  width: 700px;
  height: 500px;
  background-color: ${(props) => props.theme.White};
  position: absolute;
  top: 140px;
  left: calc(50% - 350px);
  z-index: 1000; // Ensure this is higher than other components
  border-radius: 0 0 20px 20px;
  padding: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`;
//left side
export const LeftSideContainer = styled(ColumnFlex)`
  width: 250px;
  height: 100%;
`;
export const LeftSideText = styled.button`
  width: 100%;
  font-size: 16px;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  color: ${(props) => props.theme.MediumBlue};
  transition: 0.3s;
  white-space: nowrap;
  &:hover {
    transform: scale(1.1);
    font-weight: 500;
  }
`;
//right side
export const RightSideContainer = styled(ColumnFlex)`
  width: 450px;
  height: 100%;
`;
