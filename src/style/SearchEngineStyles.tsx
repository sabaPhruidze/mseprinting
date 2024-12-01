import styled from "styled-components";
import { ColumnFlex } from "./GlobalStyle";

export const SearchEngineContainer = styled(ColumnFlex)`
  border-radius: 15px;
  position: relative;
  z-index: 1;
  height: 100%;
  width: 430px;
  margin: 0px;
  @media (max-width: 700px) {
    width: 360px;
  }
`;

export const SearchEngineInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
  position: relative;
  border: 0;
  z-index: 2;
  &:focus {
    outline: 0;
  }
`;

export const SearchEngineButton = styled.button`
  border: none;
  border-radius: 25px;
  cursor: pointer;
  background-color: ${(props) => props.theme.Transparent};
  position: absolute;
  z-index: 3;
  right: 10px;
  top: 10px;
`;

export const SearchEngineIcon = styled.img`
  width: 25px;
  height: 25px;
`;
interface ResultsListProps {
  $resultscount: number;
  $screenWidth: number;
  $isUser: boolean;
}

export const ResultsList = styled.div<ResultsListProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 125px;
  right: 30px; /* Align to the right edge of the search bar */
  z-index: 1000;
  background-color: ${(props) => props.theme.White};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-height: 120px; /* Maximum height for the result list */
  overflow-y: auto; /* Add scroll if results exceed max height */

  width: ${(props) => {
    const { $screenWidth: screenWidth, $isUser } = props;
    if (screenWidth > 2800) return $isUser ? 420 : 430;
    if (screenWidth > 2600) return $isUser ? 320 : 396;
    if (screenWidth > 2200) return $isUser ? 301 : 369;
    if (screenWidth > 1550) return $isUser ? 379 : 428;
    if (screenWidth > 1450) return $isUser ? 329 : 378;
    if (screenWidth > 1300) return 380;
    if (screenWidth > 700) return $isUser ? 429 : 430;
    if (screenWidth > 360) return 360;
    return 400;
  }}px;

  @media (max-width: 1300px) {
    top: 267px;
    left: calc(50% - 90px);
  }
  @media (max-width: 700px) {
    top: 272px;
    left: calc(50% - 180px);
  }
`;

export const ResultItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid ${(props) => props.theme.MediumGray};
  color: ${(props) => props.theme.Black};
  display: flex;
  align-items: center; /* Center-align text vertically */
  word-wrap: break-word; /* Allow text to wrap within the container */
  white-space: normal; /* Enable text wrapping for long items */
  line-height: 1.2; /* Adjust line spacing for readability */
  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${(props) => props.theme.Purple};
    border-radius: 10px;
    color: ${(props) => props.theme.White};
  }
`;

export const ResultTitle = styled.h3`
  margin: 0;
  font-size: 18px; /* Slightly smaller font to prevent overflow */
  cursor: pointer;
  overflow-wrap: break-word; /* Ensure long words wrap */
`;
