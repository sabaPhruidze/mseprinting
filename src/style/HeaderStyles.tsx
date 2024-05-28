import styled from "styled-components";
import SearchEngine from "../importantparts/SearchEngine";
import { RowFlex, ColumnFlex } from "./GlobalStyle";

export const HeaderContainer = styled(ColumnFlex)`
  width: 100%;
  height: 160px;
  position: relative;
  z-index: 1;
`;

export const HeaderMainContainer = styled(RowFlex)`
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.DarkBlueOpacity};
  padding: 0 40px;
  border-radius: 0 0 80px 80px;
  border: 1px solid white;
  position: relative;
  z-index: 2;
`;

export const HeaderButton = styled.button`
  padding: 10px 20px;
  color: ${(props) => props.theme.White};
  font-size: 24px;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
`;
export const HeaderButtonLogin = styled(HeaderButton)`
  width: 340px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

// search engine
export const SearchEngineContainer = styled(RowFlex)`
  width: 340px;
  border-radius: 15px;
`;

export const SearchEngineInput = styled.input`
  width: 240px;
  padding: 10px 15px;
  border: 1px solid ${(props) => props.theme.DarkBlue};
  border-radius: 25px;
  font-size: 16px;

  &:focus {
    border: 3px solid ${(props) => props.theme.SkyNeon};
    outline: 0;
  }
`;

export const SearchEngineButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.MediumBlue};
  color: ${(props) => props.theme.White};
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.DarkBlue};
  }
`;

export const HeaderSendContainer = styled(RowFlex)`
  width: 350px;
  height: 80px;
  padding: 0 20px;
  background-color: ${(props) => props.theme.DarkBlueOpacity};
  border-radius: 0 0 60px 60px;
  position: relative;
  z-index: 3;
  margin-top: 0px;
  border-color: white;
  border-width: 0 2px 2px 2px;
  border-style: solid;
`;
export const HeaderSendButton = styled.button`
  background-color: ${(props) => props.theme.MediumBlue};
  color: ${(props) => props.theme.White};
  border: 2px solid ${(props) => props.theme.DarkBlue};
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  border-radius: 80px;
  &:hover {
    background-color: ${(props) => props.theme.DarkBlue};
    color: ${(props) => props.theme.LightGrey};
  }
`;
