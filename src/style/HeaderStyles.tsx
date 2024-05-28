import styled from "styled-components";
import SearchEngine from "../importantparts/SearchEngine";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 90px;
  background-color: ${(props) => props.theme.LightBlue};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  border-radius: 0 0 50px 50px;
`;

export const HeaderButton = styled.button`
  padding: 10px 20px;
  color: ${(props) => props.theme.DarkBlue};
  font-size: 24px;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
`;

// search engine
export const SearchEngineContainer = styled.div`
  width: 260px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const SearchEngineInput = styled.input`
  width: 200px;
  height: 50px;
  border: 1px solid ${(props) => props.theme.DarkBlue};
  border-radius: 15px;
`;
export const SearchEngineButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.theme.White};
`;
