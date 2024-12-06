// Updated HeaderStyles with improved responsiveness and text adjustments
import styled from "styled-components";
import { RowFlex, ColumnFlex } from "./GlobalStyle";
import { GlobalButton } from "./GlobalStyle";

export const HeaderContainer = styled(ColumnFlex)`
  width: 100%;
  margin: 0 auto;
  height: auto;
  box-sizing: border-box;
`;

export const HeaderAccSignDiv = styled(RowFlex)`
  box-sizing: border-box;
  padding: 10px;
  justify-content: flex-end;
  @media (max-width: 700px) {
    padding: 0;
    padding-bottom: 10px;
  }
`;

export const HeaderAccSignSearchDiv = styled(HeaderAccSignDiv)`
  width: 100%;
  max-width: 800px;
  margin-top: 0; /* Default */
  text-align: right;
  @media (max-width: 2800px) {
    max-width: 700px;
  }
  @media (max-width: 2600px) {
    max-width: 650px;
  }
  @media (max-width: 1550px) {
    max-width: 600px;
  }
  @media (max-width: 1450px) {
    max-width: 400px;
  }
  @media (max-width: 1300px) {
    max-width: 700px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
`;

export const HeaderAccSignButton = styled.button`
  font-size: 2rem;
  border: 0;
  background-color: ${(props) => props.theme.Transparent};
  color: ${(props) => props.theme.White};
  transition: 0.3s;
  white-space: nowrap;
  &:hover {
    transform: scale(1.1);
    font-weight: 500;
    padding: 0 5px;
  }
  @media (max-width: 2600px) {
    font-size: 1.8rem;
  }
  @media (max-width: 2200px) {
    font-size: 1.3rem;
  }
`;

export const HeaderOneSimbyol = styled.div`
  padding: 0 15px;
  color: ${(props) => props.theme.White};
  font-size: 2rem;
  @media (max-width: 2600px) {
    font-size: 1.8rem;
  }

  @media (max-width: 2200px) {
    font-size: 1.3rem;
  }
`;

export const HeaderMenuBox = styled(RowFlex)`
  width: 100%;
  height: 200px;
  padding: 0px 20px;
  background-color: ${(props) => props.theme.Black};
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1300px) {
    flex-direction: column;
    height: 280px;
  }
  @media (max-width: 700px) {
    padding: 0px;
  }
`;

export const HeaderMainLogo = styled.img`
  max-width: 25%;
  object-fit: contain;
  cursor: pointer;
  @media (max-width: 2600px) {
    max-width: 20%;
  }
  @media (max-width: 1900px) {
    max-width: 30%;
  }
  @media (max-width: 1650px) {
    max-width: 25%;
  }
  @media (max-width: 1400px) {
    max-width: 30%;
  }
  @media (max-width: 1300px) {
    max-width: 625px;
    height: 135px;
    margin-bottom: 10px;
  }
  @media (max-width: 850px) {
    margin-bottom: 10px;
  }
  @media (max-width: 700px) {
    max-width: 500px;
    height: 100px;
  }
  @media (max-width: 600px) {
    max-width: 90%;
    margin-bottom: 10px;
  }
`;

export const HeaderTagline = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.Black};
  transform: skew(-15deg);
  text-align: center;

  span {
    padding: 0 10px;
    transform: skew(15deg);
  }

  @media (max-width: 2600px) {
    font-size: 1.8rem;
  }

  @media (max-width: 2200px) {
    font-size: 1.3rem;
  }
  /*
  @media (max-width: 1800px) {
    font-size: 2rem;
  } */
`;

export const HeaderMenuCountDiv = styled(RowFlex)`
  justify-content: space-between;
  height: 100%;
  align-items: center;
  @media (max-width: 1300px) {
    height: 50px;
  }
`;

export const HeaderMenuCountDivButton = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.Transparent};
  color: ${(props) => props.theme.White};
  border: 0;
  height: 100%;
  padding: 0 10px;
  transition: 0.3s;
  margin-bottom: 0;

  &:hover {
    background-color: ${(props) => props.theme.White};
    color: ${(props) => props.theme.Black};
  }
`;

export const HeaderMenuCountDivText = styled.p`
  font-size: 2rem;
  font-weight: bold;
  transition: 0.3s;
  margin: 0;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 2600px) {
    font-size: 1.8rem;
  }

  @media (max-width: 2200px) {
    font-size: 1.3rem;
  }

  @media (max-width: 500px) {
    font-size: 0.95rem;
  }
`;

export const HeaderRSBox = styled(RowFlex)`
  width: 100%;
  height: 50px;
  flex-wrap: nowrap;
  justify-content: flex-end;
  background-color: ${(props) => props.theme.Purple};

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const HeaderRSButton = styled(GlobalButton)`
  white-space: nowrap;
  font-size: 1rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.Transparent};
  margin: 0 10px;

  &:hover {
    background-color: ${(props) => props.theme.White};
    color: ${(props) => props.theme.Black};
    border: 0;
  }
  &:focus {
    transform: scale(0.95);
  }
`;
