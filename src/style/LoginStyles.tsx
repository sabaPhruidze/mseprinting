import styled from "styled-components";
import { RowFlex, ColumnFlex } from "./GlobalStyle";
import { GlobalButton } from "./GlobalStyle";

//Radio

export const RadioContainer = styled(ColumnFlex)`
  width: 100%;
  height: 50px;
  margin: 0 0 20px 0;
  justify-content: space-evenly;
  @media (max-width: 900px) {
    margin: 0 0 10px 0;
  }
`;

//register
export const RegisterContainer = styled(ColumnFlex)`
  width: 100%;
  height: 800px;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    height: 1200px;
  }
`;

export const RegisterForm = styled.form`
  width: calc(100% - 40px);
  max-width: 700px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid ${(props) => props.theme.Black};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  border-radius: 10px; /* Rounded corners */
  @media (max-width: 900px) {
    padding: 50px 0px;
  }
`;

export const RegLogContainer = styled(RowFlex)`
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 900px) {
    flex-direction: column;
    margin-bottom: 10px;
    width: 40%;
  }
`;
export const RegisterBoxOne = styled(ColumnFlex)`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  @media (max-width: 900px) {
    margin-right: 0px;
  }
`;
export const RegisterBoxTwo = styled(RegisterBoxOne)`
  margin-right: 0;
`;

export const RegisterInput = styled.input`
  width: 300px;
  height: 50px;
  font-size: 18px;
  color: ${(props) => props.theme.Black};
  border: 1px solid ${(props) => props.theme.Black};
  border-radius: 10px;
  padding-left: 10px;
  margin-bottom: 20px;
  transition: border-color 0.3s;

  &:hover {
    outline: 0;
    border: 2px solid ${(props) => props.theme.Black};
  }
  &:focus {
    outline: 0;
    border: 2px solid ${(props) => props.theme.Black};
  }
`;

export const ErrorMessage = styled.div`
  width: 300px;
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
  background: ${(props) => props.theme.Black};
  color: ${(props) => props.theme.White};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background: ${(props) => props.theme.White};
    color: ${(props) => props.theme.Black};
    border: 1px solid ${(props) => props.theme.Black};
  }
`;

//login

export const LoginContainer = styled(RegisterContainer)`
  height: 500px;
`;
export const LoginForm = styled(RegisterForm)`
  max-width: 400px;
  position: relative;
`;
