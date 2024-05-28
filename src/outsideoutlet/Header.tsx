import SearchEngine from "../importantparts/SearchEngine";
import {
  HeaderContainer,
  HeaderButton,
  ButtonGroup,
} from "../style/HeaderStyles";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderButton>Login</HeaderButton>
      <ButtonGroup>
        <HeaderButton>Home</HeaderButton>
        <HeaderButton>Product & Services</HeaderButton>
      </ButtonGroup>
      <SearchEngine />
    </HeaderContainer>
  );
}
