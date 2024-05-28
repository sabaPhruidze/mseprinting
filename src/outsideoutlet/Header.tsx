import SearchEngine from "../importantparts/SearchEngine";
import {
  HeaderContainer,
  HeaderButton,
  ButtonGroup,
  HeaderButtonLogin,
} from "../style/HeaderStyles";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderButtonLogin>Login</HeaderButtonLogin>
      <ButtonGroup>
        <HeaderButton>Home</HeaderButton>
        <HeaderButton>Product & Services</HeaderButton>
      </ButtonGroup>
      <SearchEngine />
    </HeaderContainer>
  );
}
