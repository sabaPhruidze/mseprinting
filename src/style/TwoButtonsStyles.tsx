import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
  background-color: ${(props) => props.theme.MediumGray};
  padding: 20px 0;
`;

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.red};
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 20px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 15px;
  transition: 0.4s;
  &:hover {
    background-color: darkred;
  }
`;
