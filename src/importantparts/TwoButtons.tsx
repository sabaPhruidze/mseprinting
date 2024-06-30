import { useNavigate } from "react-router-dom";
import { ButtonContainer, StyledButton } from "../style/TwoButtonsStyles";

export default function TwoButtons() {
  const navigate = useNavigate();
  return (
    <ButtonContainer>
      <StyledButton onClick={() => navigate("/request-quote")}>
        Request a Quote
      </StyledButton>
      <StyledButton onClick={() => navigate("/send-file")}>
        Send a File
      </StyledButton>
    </ButtonContainer>
  );
}
