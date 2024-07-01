import styled from "styled-components";
import { RowFlex, ColumnFlex } from "./GlobalStyle";

export const ProductsServicesContainerStyle = styled(RowFlex)`
  width: 700px;
  height: 400px;
  background-color: ${(props) => props.theme.White};
  position: absolute;
  top: 185px;
  right: 15px;
  z-index: 1000; // Ensure this is higher than other components
  border-radius: 0 0 20px 20px;
  padding: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  @media (max-width: 800px) {
    width: 500px;
    left: 10px;
  }
  @media (max-width: 550px) {
    font-size: 12px; // Smaller font size for smaller screens
    width: 400px;
  }
`;

// Left side
export const LeftSideContainer = styled(ColumnFlex)`
  width: 250px;
  height: 100%;
  border-right: 1px solid ${(props) => props.theme.Black};
  justify-content: flex-start;
  @media (max-width: 550px) {
    width: 180px;
  }
`;

export const LeftSideText = styled.button`
  text-align: left;
  margin-bottom: 10px;
  width: 100%;
  font-size: 16px;
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
    font-size: 18px;
  }
  @media (max-width: 550px) {
    font-size: 12px;
    &:hover {
      font-size: 12px;
    }
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
  width: calc(100% - 260px); // Adjust width to leave some space
  height: 100%;
  overflow-y: auto;
  padding: 15px;
  font-size: 14px; // Default font size
  @media (max-width: 750px) {
    font-size: 12px; // Smaller font size for smaller screens
    width: 250px;
  }
  @media (max-width: 550px) {
    width: 220px;
  }
`;

export const RightSideText = styled.div`
  background-color: ${(props) => props.theme.White};
  border: 1px solid ${(props) => props.theme.Black};
  border-radius: 5px;
  padding: 5px 10px; // Padding: top/bottom 5px, left/right 10px
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
`;
