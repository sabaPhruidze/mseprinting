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
  height: 35px;
  justify-content: flex-end;
  padding-right: 100px;
`;
export const HeaderAccSignDiv = styled(RowFlex)`
  width: 110px;
  box-sizing: border-box;
`;
export const HeaderAccSignSearchDiv = styled(HeaderAccSignDiv)`
  width: 350px;
`;
export const HeaderAccSignButton = styled.button`
  font-size: 14px;
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
export const HeaderOneSimbyol = styled.div`
  background-color: rgba(0, 0, 0, 0);
  color: ${(props) => props.theme.MediumBlue};
`;

//MenuBox
export const HeaderMenuBox = styled(RowFlex)`
  width: 100%;
  height: 130px;
  padding: 0 100px;
`;

export const HeaderMainLogo = styled.img`
  height: 130px;
  object-fit: cover;
  cursor: pointer;
`;
export const HeaderMenuCountDiv = styled(RowFlex)`
  width: 100%;
  height: 30px;
  justify-content: center;
  margin-top: 30px;

  width: 550px;
`;
export const HeaderMenuCountDivButton = styled.button`
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  margin-right: 15px;
`;

export const HeaderMenuCountDivText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.DarkBlue};
  background-color: rgba(0, 0, 0, 0);
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    padding: 5px 0 0 0;
    border-bottom: 1px solid ${(props) => props.theme.DarkBlue};
    font-weight: 800;
  }
`;
// Request a quote and Send a File
export const HeaderRSBox = styled(RowFlex)`
  width: 400px;
  height: 70px;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

export const HeaderRSButton = styled(GlobalButton)`
  white-space: nowrap;
  font-size: 16px;
  border-radius: 10px;
  background-color: #980b0b;
`;
