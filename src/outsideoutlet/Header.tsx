import { useContext, useMemo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { rootContext } from "../Root";
import SearchEngine from "../importantparts/SearchEngine";
import { fetchHeaderMenuData, HMenuData } from "../data/HeaderData";
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

  const { state } = headerContext;
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

  const [menuData, setMenuData] = useState<HMenuData[]>([]);

  useEffect(() => {
    const getMenuData = async () => {
      const data = await fetchHeaderMenuData();
      if (data && data.length > 0 && data[0].page) {
        setMenuData(data);
      } else if (data && data.length > 0 && (data[0] as any).Data) {
        setMenuData((data[0] as any).Data);
      }
    };

    getMenuData();
  }, []);

  const renderMenuItems = useCallback(
    () =>
      menuData.map((data) => (
        <HeaderMenuButton key={data.page}>
          <HeaderMenuText onClick={() => handleMenuNavigation(data)}>
            {data.page}
          </HeaderMenuText>
        </HeaderMenuButton>
      )),
    [menuData, handleMenuNavigation]
  );

  const menuItems = useMemo(() => renderMenuItems(), [renderMenuItems]);

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
