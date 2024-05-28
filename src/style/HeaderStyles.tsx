import styled from "styled-components";
import SearchEngine from "../importantparts/SearchEngine";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.DarkBlueOpacity};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  border-radius: 0 0 80px 80px;
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
export const SearchEngineContainer = styled.div`
  width: 340px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
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
