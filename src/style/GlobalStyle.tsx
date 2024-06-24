import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
    }
    
`;
export const RowFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const GlobalButton = styled.button`
  background-color: ${(props) => props.theme.Transparent};
  color: ${(props) => props.theme.White};
  border: 1px solid;
  padding: 5px 10px;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  transition: 0.3s ease;

  border-radius: 20px;
  &:hover {
    background-color: #102948; /* DarkBlue */
    color: #1d6a8c; /* MediumBlue */
  }
  &:focus {
    transform: scale(0.9);
  }
`;
