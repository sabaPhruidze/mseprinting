import styled from "styled-components";
import { LoginButton } from "./LoginStyles";
import {
  GlobalContainerRow,
  GlobalPartBox,
  GlobalSpecialPart,
  Globalh3Title,
  GlobalContainerColumn,
  GlobalButton,
} from "./GlobalStyle";

import { RegisterInput } from "./LoginStyles";
import { RegisterForm } from "./LoginStyles";

export const RowContainer = styled(GlobalContainerRow)`
  justify-content: flex-start;
  align-items: start;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const RQContainerColumn = styled(GlobalContainerColumn)`
  justify-content: flex-start;
  align-items: start;
  text-align: left;
  padding: 20px;
  @media (max-width: 900px) {
    align-items: center;
  }
`;

export const RQPartBox = styled(GlobalPartBox)`
  font-size: 36px;
  color: ${(props) => props.theme.Black};
  font-weight: 900;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const RQForm = styled(RegisterForm)`
  border: 0;
  box-shadow: 0;
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const RQSpecialPart = styled(GlobalSpecialPart)`
  color: ${(props) => props.theme.Black};
  margin-bottom: 50px;
  font-size: 36px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const RQh3Title = styled(Globalh3Title)`
  font-weight: 600;
  margin-bottom: 25px;
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const RQInput = styled(RegisterInput)`
  width: 400px;
  height: 60px;
  @media (max-width: 1100px) {
    width: 300px;
  }
  @media (max-width: 900px) {
    width: 400px;
  }
  @media (max-width: 460px) {
    width: 360px;
  }
`;

export const RQFormInput = styled.input`
  width: 400px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  @media (max-width: 1100px) {
    width: 300px;
  }
  @media (max-width: 900px) {
    width: 400px;
  }
  @media (max-width: 460px) {
    width: 360px;
  }
`;

export const RQFormTextarea = styled.textarea`
  width: 400px;
  min-height: 200px;
  resize: vertical;
  border-radius: 10px;
  font-size: 18px;
  color: ${(props) => props.theme.Black};
  border: 1px solid ${(props) => props.theme.Black};
  transition: border-color 0.3s;
  padding: 5px 10px;
  margin-bottom: 15px;
  @media (max-width: 1100px) {
    width: 300px;
  }
  @media (max-width: 900px) {
    width: 400px;
  }
  @media (max-width: 460px) {
    width: 360px;
  }
  &:hover {
    outline: 0;
    border: 2px solid ${(props) => props.theme.Black};
  }
  &:focus {
    outline: 0;
    border: 2px solid ${(props) => props.theme.Black};
  }
`;

export const RQFileUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  border: 2px dashed #ddd;
  border-radius: 8px;
  min-height: 400px;
  @media (max-width: 460px) {
    width: 360px;
  }
`;

export const RQFileUploadButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 10px 50px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: darkred;
  }
`;

export const RQWarningText = styled.p`
  font-size: 14px;
  color: #667;
  margin-top: 20px;
`;

export const RQSubmitButton = styled(GlobalButton)`
  width: 100%;
  padding: 10px;
  @media (max-width: 900px) {
    width: 400px;
  }
`;

export const RQLeftContainer = styled.div`
  flex: 1;
  margin-right: 20px;
  @media (max-width: 900px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const RQRightContainer = styled.div`
  flex: 1;
  margin-left: 20px;
  @media (max-width: 900px) {
    margin-left: 0;
  }
`;

export const RQFormGroup = styled.div`
  margin-bottom: 15px;
`;

export const RQFormLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
`;
export const RQButton = styled(LoginButton)`
  max-width: 600px;
  @media (max-width: 900px) {
    width: 400px;
  }
  @media (max-width: 460px) {
    width: 360px;
  }
`;
