import { HelmetProvider } from "react-helmet-async";
import { createContext, useEffect, useCallback } from "react";
import { ThemeProvider } from "styled-components";
import UseReducerComponent from "./importantparts/UseReducerComponent";
import { GlobalStyle } from "./style/GlobalStyle";
import { RootContainer } from "./style/RootStyle";
import { defaultTheme } from "./style/Themes";
import Header from "./outsideoutlet/Header";
import Footer from "./outsideoutlet/Footer";
import ProductsServicesContainer from "./importantparts/ProductsServicesContainer";
import SearchEngineResultList from "./importantparts/SearchEngineResultList";
import { Outlet } from "react-router-dom";
import { InitialState } from "./importantparts/UseReducerComponent";
import { fetchHeaderMainLogo } from "./data/HeaderData";

interface RootContextProps {
  state: InitialState;
  dispatching: (type: string, payload: any) => void;
}

export const rootContext = createContext<RootContextProps | undefined>(
  undefined
);

export default function Root() {
  const { state, dispatching } = UseReducerComponent();
  const { showProductsServicesWindow, SearchDone, SearchResults } = state;

  // Fetch header logo and other initial data
  const fetchData = useCallback(async () => {
    try {
      await fetchHeaderMainLogo();
    } catch (error) {
      console.error("Error fetching header menu data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Check for stored user data and update state
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        dispatching("USER_INFO", user); // Dispatch to set user state if user data is found
      } catch (error) {
        console.error("Error parsing stored user data:", error);
      }
    }
  }, [dispatching]);

  return (
    <rootContext.Provider value={{ state, dispatching }}>
      <HelmetProvider>
        <ThemeProvider theme={defaultTheme}>
          <RootContainer>
            <GlobalStyle />
            <Header />
            {/* Conditional rendering for ProductsServicesContainer */}
            {(showProductsServicesWindow.showProductFromBox ||
              showProductsServicesWindow.showProductFromMenu) && (
              <ProductsServicesContainer />
            )}
            {/* Conditional rendering for SearchEngineResultList */}
            {SearchDone && (
              <SearchEngineResultList
                results={SearchResults}
                dispatching={dispatching}
              />
            )}
            {/* Outlet for nested routes */}
            <Outlet />
            <Footer />
          </RootContainer>
        </ThemeProvider>
      </HelmetProvider>
    </rootContext.Provider>
  );
}
