import { useContext } from "react";
import { rootContext } from "../Root";
import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SearchEngine from "../importantparts/SearchEngine";
import { HeaderMenuData, HMenuData } from "../data/HeaderData";
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
  const headerContext = useContext(rootContext);

  if (!headerContext) {
    throw new Error("rootContext must be used within a Root provider");
  }

  const { state, dispatching } = headerContext;
  const navigate = useNavigate();

  const handleNavigationHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleNavigationLogin = useCallback(() => {
    if (!state.user) {
      navigate("/login");
    }
  }, [navigate, state.user]);

  const handleMenuNavigation = useCallback(
    (data: HMenuData) => {
      if (data.page !== "Products & Services") {
        navigate(data.path);
      }
    },
    [navigate]
  );

  const renderMenuItems = useCallback(
    () =>
      HeaderMenuData.map((data) => (
        <HeaderMenuButton key={data.page}>
          <HeaderMenuText onClick={() => handleMenuNavigation(data)}>
            {data.page}
          </HeaderMenuText>
        </HeaderMenuButton>
      )),
    [handleMenuNavigation]
  );

  const menuItems = useMemo(renderMenuItems, [renderMenuItems]);

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
            {state.user
              ? `${state.user.firstname} ${state.user.lastname}`
              : "Sign in"}
          </HeaderButton>
          <SearchEngine />
        </HeaderMainSpan>
      </HeaderMainContainer>
      <HeaderMenuContainer>{menuItems}</HeaderMenuContainer>
    </HeaderContainer>
  );
}
