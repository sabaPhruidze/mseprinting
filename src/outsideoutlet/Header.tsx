import {
  useCallback,
  useState,
  useEffect,
  useMemo,
  useContext,
  useRef,
} from "react";
import { rootContext } from "../Root";
import { useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  HeaderMenuBox,
  HeaderRSBox,
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
} from "../style/HeaderStyles";
import NavigateAndScroll from "../importantparts/NavigateAndScroll";
import SearchEngine from "../importantparts/SearchEngine";
import MAIN_LOGO from "../assets/icon/header/MSEPRINTING.png";
import { fetchHeaderMenuData } from "../data/HeaderData";
import { HMenuType } from "../types/DataTypes";

export default function Header() {
  const navigate = useNavigate();
  const context = useContext(rootContext);
  if (!context) {
    throw new Error("rootContext must be used within a Root provider");
  }
  const { state, dispatching } = context;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [menuData, setMenuData] = useState<HMenuType[]>([]);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleMenuNavigation = useCallback(
    (data: HMenuType) => {
      if (data.page !== "Products & Services") {
        navigate(data.path);
      }
    },
    [navigate]
  );

  function getMenuColor(page: string): string {
    switch (page) {
      case "Products & Services":
        return "#fb70c6"; // pink
      case "About us":
        return "#faa34d"; // orange
      case "Resources":
        return "#69be4a"; // green
      default:
        return "#ffffff"; // fallback color
    }
  }

  const handleMouseEnter = useCallback(
    (page: string) => {
      setHoveredMenu(page);
      if (page === "Products & Services") {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        dispatching("SHOW_PRODUCT_SERVICES_WINDOW_FROM_MENU", true);
      }
    },
    [dispatching]
  );

  const handleMouseLeave = useCallback(() => {
    setHoveredMenu(null);
    timeoutRef.current = setTimeout(() => {
      dispatching("SHOW_PRODUCT_SERVICES_WINDOW_FROM_MENU", false);
    }, 150);
  }, [dispatching]);

  const renderMenuItems = useCallback(
    () =>
      menuData.map((data) => {
        const isHovered = hoveredMenu === data.page;
        return (
          <HeaderMenuCountDivButton
            key={data.page}
            onMouseEnter={() => handleMouseEnter(data.page)}
            onMouseLeave={handleMouseLeave}
          >
            <HeaderMenuCountDivText
              onClick={() => handleMenuNavigation(data)}
              style={{
                textDecorationLine: isHovered ? "none" : "underline",
                textDecorationColor: isHovered
                  ? "transparent"
                  : getMenuColor(data.page),
                textDecorationThickness: "2px",
                textUnderlineOffset: "2px",
                color: isHovered ? "#000000" : getMenuColor(data.page),
              }}
            >
              {data.page}
            </HeaderMenuCountDivText>
          </HeaderMenuCountDivButton>
        );
      }),
    [
      menuData,
      handleMenuNavigation,
      handleMouseEnter,
      handleMouseLeave,
      hoveredMenu,
    ]
  );

  const menuItems = useMemo(() => renderMenuItems(), [renderMenuItems]);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("user");
    dispatching("LOGOUT", null);
    navigate("/");
  }, [dispatching, navigate]);

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

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavigationLogin = () => {
    if (!state.user) navigate("/login");
  };

  const handleNavigationRegister = () => {
    if (!state.user) navigate("/register");
  };

  const handleNavigationHome = () => {
    navigate("/");
  };

  return (
    <HeaderContainer>
      <HeaderMenuBox>
        <HeaderMainLogo
          src={MAIN_LOGO}
          alt="Main logo"
          onClick={handleNavigationHome}
        />
        {screenWidth > 1900 ? (
          <HeaderTagline>
            PRINT <span> ● </span> SIGNS <span> ● </span> MARKETING
          </HeaderTagline>
        ) : null}
        <HeaderMenuCountDiv>{menuItems}</HeaderMenuCountDiv>
        <HeaderAccSignSearchDiv>
          {screenWidth < 1300 || screenWidth > 1450 ? (
            <HeaderAccSignDiv>
              <HeaderAccSignButton
                onClick={state.user ? undefined : handleNavigationLogin}
              >
                {state.user
                  ? `${state.user.firstname} ${state.user.lastname}`
                  : "Sign in"}
              </HeaderAccSignButton>
              <HeaderOneSimbyol>{state.user ? "" : "or"}</HeaderOneSimbyol>
              <HeaderAccSignButton
                onClick={state.user ? handleLogout : handleNavigationRegister}
              >
                {state.user ? "Log out" : "Sign up"}
              </HeaderAccSignButton>
            </HeaderAccSignDiv>
          ) : null}
          <SearchEngine />
        </HeaderAccSignSearchDiv>
      </HeaderMenuBox>
      <HeaderRSBox>
        <NavigateAndScroll path="/request-quote">
          <HeaderRSButton>Request a Quote</HeaderRSButton>
        </NavigateAndScroll>
        <NavigateAndScroll path="/send-file">
          <HeaderRSButton>Place an Order</HeaderRSButton>
        </NavigateAndScroll>
      </HeaderRSBox>
    </HeaderContainer>
  );
}
