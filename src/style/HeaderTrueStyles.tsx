import styled from "styled-components";
import { RowFlex, ColumnFlex } from "./GlobalStyle";
import { GlobalButton } from "./GlobalStyle";

export const HeaderContainer = styled(ColumnFlex)`
  width: 100%;
  height: 250px;
`;
//SearchBarBox
export const HeaderTopBox = styled(RowFlex)`
  width: 100%;
  height: 40px;
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
  height: 145px;
  padding: 0 0 0 80px;
`;

export const HeaderMainLogo = styled.img`
  height: 145px;
  object-fit: cover;
  cursor: pointer;
  margin-right: 150px;
`;
export const HeaderMenuCountDiv = styled(RowFlex)`
  width: 100%;
  height: 30px;
  justify-content: space-evenly;
  margin-top: 50px;
`;
export const HeaderMenuCountDivButton = styled.button`
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  margin-right: 15px;
`;

export const HeaderMenuCountDivText = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.Black};
  background-color: rgba(0, 0, 0, 0);
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    padding: 5px 0 0 0;
    border-bottom: 1px solid ${(props) => props.theme.White};
    font-weight: 800;
  }
`;
// Request a quote and Send a File
export const HeaderRSBox = styled(RowFlex)`
  width: 100%;
  height: 70px;
  flex-wrap: nowrap;
  justify-content: flex-end;
  background-color: #f5f5dc;
`;

export const HeaderRSButton = styled(GlobalButton)`
  white-space: nowrap;
  font-size: 16px;
  border-radius: 10px;
  background-color: #980b0b;
  margin-right: 50px;
  &:hover {
    background-color: #480707; /* DarkBlue */
    color: #ffffff; /* MediumBlue */
  }
  &:focus {
    transform: scale(0.9);
  }
`;
