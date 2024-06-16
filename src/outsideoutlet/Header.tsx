import {
  useContext,
  useMemo,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import { useNavigate } from "react-router-dom";
import { rootContext } from "../Root";
import SearchEngine from "../importantparts/SearchEngine";
import {
  fetchHeaderMenuData,
  fetchHeaderMainLogo,
  HMenuData,
  LogoData,
} from "../data/HeaderData";
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

export default function Header() {
  const context = useContext(rootContext);
  if (!context) {
    throw new Error("rootContext must be used within a Root provider");
  }
  const { state, dispatching } = context;
  const { showProductsServicesWindow } = state;
  const navigate = useNavigate();

  const [menuData, setMenuData] = useState<HMenuData[]>([]);
  const [logoLink, setLogoLink] = useState<LogoData>({ logo: null });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [menuData, logoData] = await Promise.all([
          fetchHeaderMenuData(),
          fetchHeaderMainLogo(),
        ]);
        setMenuData(menuData);
        setLogoLink(logoData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleNavigationHome = () => navigate("/");

  const handleNavigationLogin = () => {
    if (!state.user) navigate("/login");
  };

  const handleMenuNavigation = (data: HMenuData) => {
    if (data.page !== "Products & Services") navigate(data.path);
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

  const menuItems = useMemo(
    () =>
      menuData.map((data) => (
        <HeaderMenuButton
          key={data.page}
          onMouseEnter={
            data.page === "Products & Services" ? handleMouseEnter : undefined
          }
          onMouseLeave={handleMouseLeave}
        >
          <HeaderMenuText
            onClick={() => handleMenuNavigation(data)}
            active={
              showProductsServicesWindow.showProductFromBox &&
              data.page === "Products & Services"
            }
          >
            {data.page}
          </HeaderMenuText>
        </HeaderMenuButton>
      )),
    [
      menuData,
      handleMouseEnter,
      handleMouseLeave,
      showProductsServicesWindow.showProductFromBox,
    ]
  );

  return (
    <HeaderContainer>
      <HeaderMainContainer>
        {logoLink.logo ? (
          <HeaderMainLogo
            src={logoLink.logo}
            alt="MSE PRINTING"
            onClick={handleNavigationHome}
          />
        ) : (
          "Loading..."
        )}
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
