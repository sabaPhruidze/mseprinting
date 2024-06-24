// Imports
import styled from "styled-components";
import { RowFlex, ColumnFlex } from "./GlobalStyle";

// Header Container
export const HeaderContainer = styled(ColumnFlex)`
  width: 100%;
  height: 180px;
  background-color: ${(props) => props.theme.White};
  padding: 5px 20px;
  @media (max-width: 1600px) {
    height: 160px;
  }
  @media (max-width: 768px) {
    padding: 5px 10px;
  }

  @media (min-width: 1024px) {
    padding: 5px 100px;
  }
`;

export const HeaderMainContainer = styled(RowFlex)`
  align-items: start;
  width: 100%;
  height: 150px;
  border-radius: 0 0 80px 80px;
  border: 1px solid white;
  @media (max-width: 1600px) {
    height: 130px;
  }
`;

export const HeaderMainLogo = styled.img`
  height: 150px;
  object-fit: cover;
  cursor: pointer;
  @media (max-width: 1600px) {
    height: 130px;
  }
`;

export const HeaderMainSpan = styled.span`
  margin-top: 5px;
  height: 33px;
  display: flex;
  flex-direction: row;
  color: ${(props) => props.theme.MediumBlue};
`;

export const HeaderButton = styled.button`
  font-size: 14px;
  padding: 0 5px;
  border: 0;
  background-color: ${(props) => props.theme.Transparent};
  color: ${(props) => props.theme.MediumBlue};
  transition: 0.3s;
  white-space: nowrap;
  &:hover {
    transform: scale(1.1);
    font-weight: 500;
  }
`;

export const HeaderOneSimbyol = styled.p`
  margin: 3px 5px;
`;

// Search Engine

export const SearchEngineContainer = styled(ColumnFlex)`
  border-radius: 15px;
  position: relative;
  z-index: 1;
  height: 100%;
  width: 430px;
  margin: 0 auto;
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

export const ResultsList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  width: 100%;
  background-color: ${(props) => props.theme.White};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 40px;
`;

export const ResultItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid ${(props) => props.theme.LightGray};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${(props) => props.theme.LightBlue};
    border-radius: 10px;
  }
`;

export const ResultTitle = styled.h3`
  margin: 0;
  color: ${(props) => props.theme.DarkBlue};
  font-size: 16px;
`;

// Header Menu
export const HeaderMenuContainer = styled(RowFlex)`
  width: 100%;
  height: 30px;
  justify-content: center;
  @media (min-width: 768px) {
    width: 500px;
  }
`;

export const HeaderMenuButton = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.Transparent};
  border: 0;
  margin-right: 15px;
`;

export const HeaderMenuText = styled.p.withConfig({
  shouldForwardProp: (prop) => !["active"].includes(prop),
})<{ active: boolean }>`
  font-size: 16px;
  font-weight: ${(props) => (props.active ? 800 : 500)};
  color: ${(props) => props.theme.DarkBlue};
  background-color: ${(props) => props.theme.Transparent};
  transition: 0.3s;
  padding: ${(props) => (props.active ? "5px 0 0 0" : "0")};
  transform: ${(props) => (props.active ? "scale(1.1)" : "scale(1)")};
  border-bottom: ${(props) => (props.active ? "1px solid #102948" : "none")};

  &:hover {
    transform: scale(1.1);
    padding: 5px 0 0 0;
    border-bottom: 1px solid ${(props) => props.theme.DarkBlue};
    font-weight: 800;
  }
`;
