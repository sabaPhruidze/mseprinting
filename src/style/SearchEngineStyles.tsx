import styled from "styled-components";
import { ColumnFlex } from "./GlobalStyle";

export const SearchEngineContainer = styled(ColumnFlex)`
  border-radius: 15px;
  position: relative;
  z-index: 1;
  height: 100%;
  width: 430px;
  margin: 0 auto;
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
  resultscount: number;
}

export const ResultsList = styled.div<ResultsListProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 33px;
  right: 40px;
  z-index: 1000;
  margin-top: 5px;
  width: 405px;
  background-color: ${(props) => props.theme.White};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: ${(props) =>
    props.resultscount >= 3
      ? "120px"
      : props.resultscount === 2
      ? "80px"
      : "40px"};
`;

export const ResultItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid ${(props) => props.theme.MediumGray};
  color: ${(props) => props.theme.Black};
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

  font-size: 16px;
  cursor: pointer;
`;
