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
  HeaderTagline,
  HeaderMenuCountDivText,
  HeaderRSButton,
} from "../style/HeaderTrueStyles";
import SearchEngine from "../importantparts/SearchEngine";
import MAIN_LOGO from "../assets/icon/header/MSEPRINTING.png";
import { fetchHeaderMenuData } from "../data/HeaderData";
import { HMenuType } from "../types/DataTypes";

export default function HeaderTrue() {
  const navigate = useNavigate();

  const handleMenuNavigation = useCallback(
    (data: HMenuType) => {
      if (data.page !== "Products & Services") {
        navigate(data.path);
      }
    },
    [navigate]
  );

  const [menuData, setMenuData] = useState<HMenuType[]>([]);

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
            <HeaderAccSignButton>Sign in</HeaderAccSignButton>
            <HeaderOneSimbyol>or</HeaderOneSimbyol>
            <HeaderAccSignButton>Sign up</HeaderAccSignButton>
          </HeaderAccSignDiv>
          <SearchEngine />
        </HeaderAccSignSearchDiv>
      </HeaderTopBox>
      <HeaderMenuBox>
        <HeaderMainLogo src={MAIN_LOGO} alt="Main logo" />
        <HeaderTagline>PRINT ● SIGNS ● MARKETING</HeaderTagline>
        <HeaderMenuCountDiv>{menuItems}</HeaderMenuCountDiv>
      </HeaderMenuBox>
      <HeaderRSBox>
        <HeaderRSButton>Request a Quote</HeaderRSButton>
        <HeaderRSButton>Send a File</HeaderRSButton>
      </HeaderRSBox>
    </HeaderContainer>
  );
}
