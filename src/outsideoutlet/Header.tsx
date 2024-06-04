import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const handleNavigationHome = () => {
    navigate("/");
  };

  const handleNavigationLogin = () => {
    navigate("/login");
  };
  return (
    <HeaderContainer>
      <HeaderMainContainer>
        <HeaderMainLogo
          src={MSEPRINTING}
          alt="MSE PRINTING"
          onClick={handleNavigationHome}
        />
        <HeaderMainSpan>
          <HeaderButton>Account</HeaderButton>
          <HeaderOneSimbyol>|</HeaderOneSimbyol>
          <HeaderButton
            style={{ marginRight: 10 }}
            onClick={handleNavigationLogin}
          >
            Sign in
          </HeaderButton>
          <SearchEngine />
        </HeaderMainSpan>
      </HeaderMainContainer>
      <HeaderMenuContainer>
        {HeaderMenuData.map((data) => (
          <HeaderMenuButton key={data.page}>
            <HeaderMenuText
              onClick={() =>
                data.page !== "Products & Services" ? navigate(data.path) : ""
              }
            >
              {data.page}
            </HeaderMenuText>
          </HeaderMenuButton>
        ))}
      </HeaderMenuContainer>
    </HeaderContainer>
  );
}
