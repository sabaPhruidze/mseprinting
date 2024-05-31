import SearchEngine from "../importantparts/SearchEngine";
import { HeaderMenuData } from "../data/HeaderData";
import {
  HeaderContainer,
  HeaderMainContainer,
  HeaderMainSpan,
  HeaderButton,
  HeaderOneSimbyol,
  HeaderMenuContainer,
  HeaderMenuButton,
  HeaderMainLogo,
  HeaderMenuText,
} from "../style/HeaderStyles";

import MSEPRINTING from "../assets/icon/header/MSEPRINTING.svg";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderMainContainer>
        <HeaderMainLogo src={MSEPRINTING} alt="MSE PRINTING" />
        <HeaderMainSpan>
          <HeaderButton>Account</HeaderButton>
          <HeaderOneSimbyol>|</HeaderOneSimbyol>
          <HeaderButton style={{ marginRight: 10 }}>Sign in</HeaderButton>
          <SearchEngine />
        </HeaderMainSpan>
      </HeaderMainContainer>
      <HeaderMenuContainer>
        {HeaderMenuData.map((data: string) => (
          <HeaderMenuButton key={data}>
            <HeaderMenuText>{data}</HeaderMenuText>
          </HeaderMenuButton>
        ))}
      </HeaderMenuContainer>
    </HeaderContainer>
  );
}
