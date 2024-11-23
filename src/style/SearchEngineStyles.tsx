import styled from "styled-components";
import { ColumnFlex } from "./GlobalStyle";

export const SearchEngineContainer = styled(ColumnFlex)`
  border-radius: 15px;
  position: relative;
  z-index: 1;
  height: 100%;
  width: 430px;
  margin: 0px;
  @media (max-width: 768px) {
    width: 300px;
  }
  @media (max-width: 510px) {
    width: 230px;
  }
`;

export const SearchEngineInput = styled.input`
  width: 100%;
  padding: 4px 15px;
  border-radius: 10px;
  font-size: 14px;
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
  top: 0px;
`;

export const SearchEngineIcon = styled.img`
  width: 20px;
  height: 20px;
`;
interface ResultsListProps {
  $resultscount: number;
}

export const ResultsList = styled.div<ResultsListProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 38px;
  right: 40px; /* Align to the right edge of the search bar */
  z-index: 1000;
  width: 375px; /* Match the search bar width */
  background-color: ${(props) => props.theme.White};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-height: 120px; /* Maximum height for the result list */
  overflow-y: auto; /* Add scroll if results exceed max height */

  @media (max-width: 768px) {
    width: 245px;
  }

  @media (max-width: 510px) {
    width: 175px;
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
  font-size: 14px; /* Slightly smaller font to prevent overflow */
  cursor: pointer;
  overflow-wrap: break-word; /* Ensure long words wrap */
`;
