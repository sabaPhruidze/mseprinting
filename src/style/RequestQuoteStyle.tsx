import styled from "styled-components";
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
`;

export const RQContainerColumn = styled(GlobalContainerColumn)`
  justify-content: flex-start;
  align-items: start;
  text-align: left;
  padding: 20px;
`;
export const RQPartBox = styled(GlobalPartBox)`
  font-size: 36px;
  color: ${(props) => props.theme.Black};

  font-weight: 900;
`;

export const RQForm = styled(RegisterForm)`
  border: 0;
  box-shadow: 0;
  max-width: 1200px;
`;

export const RQSpecialPart = styled(GlobalSpecialPart)`
  color: ${(props) => props.theme.Black};
  margin-bottom: 50px;
  font-size: 36px;
  font-weight: 400;
`;
export const RQh3Title = styled(Globalh3Title)`
  font-weight: 600;
  margin-bottom: 25px;
`;
export const RQInput = styled(RegisterInput)`
  width: 400px;
  height: 60px;
`;

// New styles for RQProjectDetailsForm
export const RQFormContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

export const RQFormInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

export const RQFormTextarea = styled.textarea`
  min-height: 200px;
  width: 100%;
  resize: vertical;
  border-radius: 10px;
  font-size: 18px;
  color: ${(props) => props.theme.Black};
  border: 1px solid ${(props) => props.theme.Black};
  border-radius: 10px;
  transition: border-color 0.3s;
  padding: 5px 10px;
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
`;

export const RQLeftContainer = styled.div`
  flex: 1;
  margin-right: 20px;
`;

export const RQRightContainer = styled.div`
  flex: 1;
  margin-left: 20px;
`;
