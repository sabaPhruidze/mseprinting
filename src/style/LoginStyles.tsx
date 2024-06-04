import styled from "styled-components";
import { RowFlex, ColumnFlex } from "./GlobalStyle";

export const LoginContainer = styled(ColumnFlex)`
  width: 100%;
  height: 600px;
  margin: 50px 0px;
  padding: 0 50px;
`;
export const LoginForm = styled(LoginContainer)`
  height: 500px;
  margin: 0;
`;
export const LoginInput = styled.input`
  width: 200px;
  height: 40px;
  font-size: 20px;
  color: ${(props) => props.theme.DarkBlue};
  border: 1px solid ${(props) => props.theme.DarkBlue};
  border-radius: 20px;
  padding-left: 10px;
  &:hover {
    outline: 0;
    border: 2px solid ${(props) => props.theme.DarkBlue};
  }
  &:focus {
    outline: 0;
    border: 2px solid ${(props) => props.theme.DarkBlue};
  }
`;
