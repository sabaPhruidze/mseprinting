import styled from "styled-components";
import { RowFlex, ColumnFlex } from "./GlobalStyle";
import { GlobalButton } from "./GlobalStyle";

export const HeaderContainer = styled(ColumnFlex)`
  width: 100%;
  height: 230px;
`;
//SearchBarBox
export const HeaderTopBox = styled(RowFlex)`
  width: 100%;
  height: 45px;
  justify-content: flex-end;
  padding-right: 20px;
  background-color: ${(props) => props.theme.lightGray};
`;
export const HeaderAccSignDiv = styled(RowFlex)`
  width: 120px;
  box-sizing: border-box;
`;
export const HeaderAccSignSearchDiv = styled(HeaderAccSignDiv)`
  width: 600px;
`;
export const HeaderAccSignButton = styled.button`
  font-size: 14px;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  color: ${(props) => props.theme.Dark};
  transition: 0.3s;
  white-space: nowrap;
  &:hover {
    transform: scale(1.1);
    font-weight: 500;
  }
`;
export const HeaderOneSimbyol = styled.div``;

//MenuBox
export const HeaderMenuBox = styled(RowFlex)`
  width: 100%;
  height: 140px;
  padding: 0 50px;
  background-color: ${(props) => props.theme.Black};
`;

export const HeaderMainLogo = styled.img`
  width: 25%;
  object-fit: cover;
  cursor: pointer;
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
`;

export const HeaderMenuCountDiv = styled(RowFlex)`
  width: 400px;
`;
export const HeaderMenuCountDivButton = styled.button`
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  height: 30px;
`;

export const HeaderMenuCountDivText = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: ${(props) => props.theme.White};
  background-color: rgba(0, 0, 0, 0);
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
    border-bottom: 1px solid ${(props) => props.theme.White};
  }
`;
// Request a quote and Send a File
export const HeaderRSBox = styled(RowFlex)`
  width: 100%;
  height: 45px;
  flex-wrap: nowrap;
  justify-content: flex-end;
  background-color: ${(props) => props.theme.Purple};
  padding-right: 50px;
`;

export const HeaderRSButton = styled(GlobalButton)`
  white-space: nowrap;
  font-size: 16px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0);
  margin-right: 20px;
  &:hover {
    background-color: ${(props) => props.theme.White};
    color: ${(props) => props.theme.Black};
    border: 0;
  }
  &:focus {
    transform: scale(0.9);
  }
`;
