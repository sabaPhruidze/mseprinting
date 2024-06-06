import styled from "styled-components";
import { RowFlex, ColumnFlex } from "./GlobalStyle";

export const LoginContainer = styled(ColumnFlex)`
  width: 100%;
  height: 600px;
  margin: 50px 0px;
  justify-content: center;
  align-items: center;
`;

export const LoginForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterBox = styled(ColumnFlex)`
  width: 50%;
  height: 100%;
  justify-content: center;
`;

export const LoginInput = styled.input`
  width: 300px;
  height: 50px;
  font-size: 18px;
  color: ${(props) => props.theme.DarkBlue};
  border: 1px solid ${(props) => props.theme.DarkBlue};
  border-radius: 10px;
  padding-left: 10px;
  margin-bottom: 30px;
  &:hover {
    outline: 0;
    border: 2px solid ${(props) => props.theme.DarkBlue};
  }
  &:focus {
    outline: 0;
    border: 2px solid ${(props) => props.theme.DarkBlue};
  }
`;
