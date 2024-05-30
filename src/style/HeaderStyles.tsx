import styled from "styled-components";
import SearchEngine from "../importantparts/SearchEngine";
import { RowFlex, ColumnFlex } from "./GlobalStyle";

export const HeaderContainer = styled(ColumnFlex)`
  width: 100%;
  height: 140px;
  background-color: ${(props) => props.theme.White};
  padding: 10px 100px;
`;

export const HeaderMainContainer = styled(RowFlex)`
  align-items: start;
  width: 100%;
  height: 100px;

  border-radius: 0 0 80px 80px;
  border: 1px solid white;
`;
export const HeaderMainLogo = styled.img`
  height: 100px;
  object-fit: cover;
`;

export const HeaderMainSpan = styled.span`
  height: 30%;
  display: flex;
  flex-direction: row;
  color: ${(props) => props.theme.MediumBlue};
`;
export const HeaderButton = styled.button`
  color: ${(props) => props.theme.Black};
  font-size: 14px;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  color: ${(props) => props.theme.MediumBlue};
`;
export const HeaderOneSimbyol = styled.p`
  margin: 0 5px;
`;

// search engine
export const SearchEngineContainer = styled(RowFlex)`
  border-radius: 15px;
  position: relative;
  z-index: 1;
`;

export const SearchEngineInput = styled.input`
  width: 150px;
  padding: 6px 15px;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.MediumBlue};
  border-radius: 10px;
  font-size: 14px;
  position: relative;
  z-index: 2;
  &:focus {
    border-bottom: 3px solid ${(props) => props.theme.SkyNeon};
    outline: 0;
  }
`;

export const SearchEngineButton = styled.button`
  padding: 5px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  z-index: 3;
  right: 3px;
  top: 0px;
`;

export const SearchEngineIcon = styled.img`
  width: 20px;
  height: 20px;
  filter: invert(33%) sepia(46%) saturate(738%) hue-rotate(153deg)
    brightness(97%) contrast(92%);
`;

export const HeaderMenuContainer = styled(RowFlex)`
  width: 500px;
  height: 40px;
`;
export const HeaderMenuButton = styled.button`
  color: ${(props) => props.theme.DarkBlue};
  font-size: 16px;

  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  margin-right: 15px;
  transition: 0.7s;
  &:hover {
    text-decoration: underline;
    transform: scale(1.1);
    padding: 0px 10px;
    background-color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme.DarkBlue};
    border-bottom: 0;
    border-radius: 30px;
    font-weight: 800px;
  }
`;
