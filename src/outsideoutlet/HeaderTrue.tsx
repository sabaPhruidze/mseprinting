import React, { useCallback, useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  HeaderMenuBox,
  HeaderRSBox,
  HeaderTopBox,
  HeaderAccSignButton,
  HeaderAccSignDiv,
  HeaderOneSimbyol,
  HeaderAccSignSearchDiv,
  HeaderMainLogo,
  HeaderMenuCountDiv,
  HeaderMenuCountDivButton,
  HeaderMenuCountDivText,
  HeaderRSButton,
} from "../style/HeaderTrueStyles";
import SearchEngine from "../importantparts/SearchEngine";
import MAIN_LOGO from "../assets/icon/header/MSEPRINTING.svg";
import { fetchHeaderMenuData, HMenuData } from "../data/HeaderData";

export default function HeaderTrue() {
  const navigate = useNavigate();

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
        <HeaderMenuCountDivButton key={data.page}>
          <HeaderMenuCountDivText onClick={() => handleMenuNavigation(data)}>
            {data.page}
          </HeaderMenuCountDivText>
        </HeaderMenuCountDivButton>
      )),
    [menuData, handleMenuNavigation]
  );
  const menuItems = useMemo(() => renderMenuItems(), [renderMenuItems]);
  return (
    <HeaderContainer>
      <HeaderTopBox>
        <HeaderAccSignSearchDiv>
          <HeaderAccSignDiv>
            <HeaderAccSignButton>Account</HeaderAccSignButton>
            <HeaderOneSimbyol>|</HeaderOneSimbyol>
            <HeaderAccSignButton>Sign in</HeaderAccSignButton>
          </HeaderAccSignDiv>
          <SearchEngine />
        </HeaderAccSignSearchDiv>
      </HeaderTopBox>
      <HeaderMenuBox>
        <HeaderMainLogo src={MAIN_LOGO} alt="Main logo" />
        <HeaderMenuCountDiv>{menuItems}</HeaderMenuCountDiv>
      </HeaderMenuBox>
      <HeaderRSBox>
        <HeaderRSButton>Request a Quote</HeaderRSButton>
        <HeaderRSButton>Send a File</HeaderRSButton>
      </HeaderRSBox>
    </HeaderContainer>
  );
}
