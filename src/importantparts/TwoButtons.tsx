import { ButtonContainer, StyledButton } from "../style/TwoButtonsStyles";
import NavigateAndScroll from "./NavigateAndScroll";

export default function TwoButtons() {
  return (
    <ButtonContainer>
      <NavigateAndScroll path="/request-quote">
        <StyledButton>Request a Quote</StyledButton>
      </NavigateAndScroll>
      <NavigateAndScroll path="/send-file">
        <StyledButton>Send a File</StyledButton>
      </NavigateAndScroll>
    </ButtonContainer>
  );
}
