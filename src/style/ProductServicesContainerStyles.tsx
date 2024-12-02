import styled from "styled-components";
import { RowFlex, ColumnFlex } from "./GlobalStyle";

export const ProductsServicesContainerStyle = styled(RowFlex)`
  width: 800px;
  height: 420px;
  background-color: ${(props) => props.theme.White};
  position: absolute;
  top: 200px;
  left: calc(50% - 350px);
  z-index: 1000; // Ensure this is higher than other components
  border-radius: 0 0 20px 20px;
  padding: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  font-size: 20px;
  @media (max-width: 1615px) {
    left: calc(30% - 350px);
  }
  @media (max-width: 1300px) {
    left: 20px;
  }
  @media (max-width: 850px) {
    width: 550px;
    left: 10px;
    font-size: 18px;
    padding: 0;
  }
  @media (max-width: 700px) {
    top: 170px;
  }
  @media (max-width: 570px) {
    width: 390px;
    left: 0px;
    font-size: 14px;
  }
`;

// Left side
export const LeftSideContainer = styled(ColumnFlex)`
  width: 290px;
  height: 100%;
  border-right: 1px solid ${(props) => props.theme.Black};
  justify-content: flex-start;
  @media (max-width: 850px) {
    width: 300px;
  }
  @media (max-width: 570px) {
    width: 180px;
  }
`;

export const LeftSideText = styled.button`
  text-align: left;
  margin-bottom: 10px;
  width: 100%;
  border: 0;
  background-color: ${(props) => props.theme.Transparent};
  color: ${(props) => props.theme.Black};
  transition: 0.3s;
  white-space: nowrap;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
    padding-left: 2px;
  }
  @media (max-width: 570px) {
    font-weight: 200;
  }
`;

// Right side
export const RightSideContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(150px, 1fr)
  ); // Use auto-fill for responsive grid
  grid-auto-rows: min-content; // Adjust row height to content
  gap: 10px; // Reduced gap for closer spacing
  width: calc(100% - 300px); // Adjust width to leave some space
  height: 100%;
  overflow-y: auto;
  padding: 15px;
  @media (max-width: 570px) {
    padding-left: 0px;
    width: calc(100% - 210px);
  }
`;

export const RightSideText = styled.div`
  background-color: ${(props) => props.theme.White};
  border: 1px solid ${(props) => props.theme.Black};
  border-radius: 5px;
  padding: 5px 10px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  font-weight: 500;
  color: ${(props) => props.theme.Black};
  &:hover {
    background-color: ${(props) => props.theme.Black};
    color: ${(props) => props.theme.White};
  }
  @media (max-width: 570px) {
    font-weight: 200;
  }
`;
