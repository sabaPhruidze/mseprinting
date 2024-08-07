import { createContext, useEffect, useCallback } from "react";
import { ThemeProvider } from "styled-components";
import UseReducerComponent from "./importantparts/UseReducerComponent";
import { GlobalStyle } from "./style/GlobalStyle";
import { RootContainer } from "./style/RootStyle";
import { defaultTheme } from "./style/Themes";
import Header from "./outsideoutlet/Header";
import { Outlet } from "react-router-dom";
import Footer from "./outsideoutlet/Footer";
import { InitialState } from "./importantparts/UseReducerComponent";
import { fetchHeaderMainLogo } from "./data/HeaderData";

// important components
import ProductsServicesContainer from "./importantparts/ProductsServicesContainer";
import SearchEngineResultList from "./importantparts/SearchEngineResultList";

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

  const fetchData = useCallback(async () => {
    try {
      await fetchHeaderMainLogo();
    } catch (error) {
      console.error("Error fetching header menu data: ", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <rootContext.Provider value={{ state, dispatching }}>
      <ThemeProvider theme={defaultTheme}>
        <RootContainer>
          <GlobalStyle />
          <Header />
          {showProductsServicesWindow.showProductFromBox ||
          showProductsServicesWindow.showProductFromMenu ? (
            <ProductsServicesContainer />
          ) : null}
          {SearchDone ? (
            <SearchEngineResultList
              results={SearchResults}
              dispatching={dispatching}
            />
          ) : null}
          <Outlet />
          <Footer />
        </RootContainer>
      </ThemeProvider>
    </rootContext.Provider>
  );
}
