import styled from "styled-components";
import { RowFlex, ColumnFlex } from "./GlobalStyle";
import { GlobalButton } from "./GlobalStyle";

export const HeaderContainer = styled(ColumnFlex)`
  width: 100%;
  margin: 0 auto;
  height: 230px;
  box-sizing: border-box;
`;

export const HeaderTopBox = styled(RowFlex)`
  width: 100%;
  height: 45px;
  justify-content: flex-end;
  padding-right: 20px;
  background-color: ${(props) => props.theme.MediumGray};
`;

export const HeaderAccSignDiv = styled(RowFlex)`
  box-sizing: border-box;
  padding: 20px;
`;

export const HeaderAccSignSearchDiv = styled(HeaderAccSignDiv)`
  width: 600px;
  @media (max-width: 768px) {
    width: 470px;
  }
  @media (max-width: 510px) {
    width: 400px;
  }
`;

export const HeaderAccSignButton = styled.button`
  font-size: 14px;
  border: 0;
  background-color: ${(props) => props.theme.Transparent};
  color: ${(props) => props.theme.Dark};
  transition: 0.3s;
  white-space: nowrap;
  &:hover {
    transform: scale(1.1);
    font-weight: 500;
    padding: 0 5px;
  }
`;

export const HeaderOneSimbyol = styled.div`
  padding: 0 5px;
`;

export const HeaderMenuBox = styled(RowFlex)`
  width: 100%;
  height: 140px;
  padding: 0 50px;
  background-color: ${(props) => props.theme.Black};
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    padding: 0 10px;
  }
  @media (max-width: 1150px) {
    padding: 0 50px;
  }
  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  @media (max-width: 768px) {
    padding: 0px;
  }
`;

export const HeaderMainLogo = styled.img`
  width: 25%;
  object-fit: cover;
  cursor: pointer;
  @media (max-width: 1150px) {
    width: 35%;
  }

  @media (max-width: 800px) {
    width: 380px;
    margin-bottom: 20px;
  }
  @media (max-width: 650px) {
    width: 360px;
  }
`;

export const HeaderTagline = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(40% - 20px);
  background-color: ${(props) => props.theme.Black};
  transform: skew(-15deg);
  @media (max-width: 1300px) {
    font-size: 26px;
  }
  @media (max-width: 1150px) {
    display: none;
  }
`;

export const HeaderMenuCountDiv = styled(RowFlex)`
  width: 400px;
  justify-content: space-around;
  height: 100%;
  align-items: flex-end; /* Add this line to align items at the bottom */
  @media (max-width: 800px) {
    height: 40px;
  }
`;

export const HeaderMenuCountDivButton = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.Transparent};
  color: ${(props) => props.theme.White};
  border: 0;
  height: 100%;
  padding: 0 5px;
  transition: 0.3s;
  margin-bottom: 0; /* Ensure there's no margin at the bottom */

  &:hover {
    background-color: ${(props) => props.theme.White};
    color: ${(props) => props.theme.Black};
  }
`;

export const HeaderMenuCountDivText = styled.p`
  font-size: 20px;
  font-weight: 400;
  height: 30px;
  transition: 0.3s;
  margin: 0; /* Ensure there's no margin at the bottom */
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 1300px) {
    font-size: 18px;
  }
`;

export const HeaderRSBox = styled(RowFlex)`
  width: 100%;
  height: 45px;
  flex-wrap: nowrap;
  justify-content: flex-end;
  background-color: ${(props) => props.theme.Purple};
  padding-right: 50px;

  @media (max-width: 768px) {
    justify-content: center;
    padding-right: 20px;
  }
`;

export const HeaderRSButton = styled(GlobalButton)`
  white-space: nowrap;
  font-size: 16px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.Transparent};
  margin: 0;
  margin-right: 20px;

  &:hover {
    background-color: ${(props) => props.theme.White};
    color: ${(props) => props.theme.Black};
    border: 0;
  }
  &:focus {
    transform: scale(0.9);
  }

  @media (max-width: 768px) {
    margin-right: 10px;
  }
`;
