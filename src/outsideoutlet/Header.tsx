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

  const [menuData, setMenuData] = useState<HMenuType[]>([]);
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
  const handleNavigationLogin = () => {
    if (!state.user) navigate("/login");
  };
  const handleNavigationRegister = () => {
    if (!state.user) navigate("/register");
  };
  const handleNavigationHome = () => {
    navigate("/");
  };
  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    dispatching("SHOW_PRODUCT_SERVICES_WINDOW_FROM_MENU", true);
  }, [dispatching]);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      dispatching("SHOW_PRODUCT_SERVICES_WINDOW_FROM_MENU", false);
    }, 150);
  }, [dispatching]);
  const renderMenuItems = useCallback(
    () =>
      menuData.map((data) => (
        <HeaderMenuCountDivButton
          key={data.page}
          onMouseEnter={
            data.page === "Products & Services" ? handleMouseEnter : undefined
          }
          onMouseLeave={handleMouseLeave}
        >
          <HeaderMenuCountDivText
            onClick={() => handleMenuNavigation(data)}
            style={{
              color: getMenuColor(data.page),
              textDecoration: "underline",
              textDecorationColor: getMenuColor(data.page),
              textUnderlineOffset: "2px",
              textDecorationThickness: "2px",
            }}
          >
            {data.page}
          </HeaderMenuCountDivText>
        </HeaderMenuCountDivButton>
      )),
    [menuData, handleMenuNavigation]
  );

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const menuItems = useMemo(() => renderMenuItems(), [renderMenuItems]);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
        ) : (
          ""
        )}
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
          ) : (
            ""
          )}
          <SearchEngine />
        </HeaderAccSignSearchDiv>
        {/* </HeaderContentSecondPartWrapper> */}
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
