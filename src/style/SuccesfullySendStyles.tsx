import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const AlertContainer = styled.div`
  background-color: ${(props) => props.theme.White};
  border: 1px solid ${(props) => props.theme.MediumBlue};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 90%;
  text-align: center;
`;

export const AlertMessage = styled.p`
  font-size: 18px;
  color: ${(props) => props.theme.Black};
  margin-bottom: 20px;
`;

export const AlertButton = styled.button`
  background-color: ${(props) => props.theme.MediumBlue};
  color: ${(props) => props.theme.White};
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.DarkBlue};
  }

  &:focus {
    outline: none;
    transform: scale(0.95);
  }
`;
