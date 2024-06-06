import styled from "styled-components";
import { RowFlex, ColumnFlex } from "./GlobalStyle";
import { GlobalButton } from "./GlobalStyle";

export const LoginContainer = styled(ColumnFlex)`
  width: 100%;
  height: 800px;
  margin: 0;
  justify-content: center;
  align-items: center;
  border-top: 3px solid ${(props) => props.theme.MediumBlue};
`;

export const LoginForm = styled.form`
  width: 80%;
  max-width: 600px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid ${(props) => props.theme.MediumBlue};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  border-radius: 10px; /* Rounded corners */
`;

export const RegLogContainer = styled(RowFlex)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const RegisterBox = styled(ColumnFlex)`
  width: 45%;
  justify-content: center;
  align-items: center;
`;

export const LoginInput = styled.input`
  width: 100%;
  height: 50px;
  font-size: 18px;
  color: ${(props) => props.theme.DarkBlue};
  border: 1px solid ${(props) => props.theme.MediumBlue};
  border-radius: 10px;
  padding-left: 10px;
  margin-bottom: 20px;
  transition: border-color 0.3s;

  &:hover {
    outline: 0;
    border: 2px solid ${(props) => props.theme.MediumBlue};
  }
  &:focus {
    outline: 0;
    border: 2px solid ${(props) => props.theme.MediumBlue};
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: -15px;
  margin-bottom: 15px;
`;

export const LoginButton = styled(GlobalButton)`
  width: 100%;
  max-width: 300px;
  height: 50px;
  font-size: 18px;
  background: ${(props) => props.theme.DarkBlue};
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: ${(props) => props.theme.LightBlue};
  }
`;
