import SearchEngine from "../importantparts/SearchEngine";
import {
  HeaderContainer,
  HeaderMainContainer,
  HeaderButton,
  ButtonGroup,
  HeaderButtonLogin,
  HeaderSendContainer,
  HeaderSendButton,
} from "../style/HeaderStyles";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderMainContainer>
        <HeaderButtonLogin>Login</HeaderButtonLogin>
        <ButtonGroup>
          <HeaderButton>Home</HeaderButton>
          <HeaderButton>Product & Services</HeaderButton>
        </ButtonGroup>
        <SearchEngine />
      </HeaderMainContainer>
      <HeaderSendContainer>
        <HeaderSendButton>Request a Quote</HeaderSendButton>
        <HeaderSendButton>Send a File</HeaderSendButton>
      </HeaderSendContainer>
    </HeaderContainer>
  );
}
