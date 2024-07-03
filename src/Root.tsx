import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import UseReducerComponent from "./importantparts/UseReducerComponent";
import { GlobalStyle } from "./style/GlobalStyle";
import { RootContainer, RootLoading } from "./style/RootStyle";
import { defaultTheme } from "./style/Themes";
// import Header from "./outsideoutlet/Header";
import Header from "./outsideoutlet/Header";
import { Outlet } from "react-router-dom";
import Footer from "./outsideoutlet/Footer";
import { InitialState } from "./importantparts/UseReducerComponent";

import { fetchHeaderMainLogo } from "./data/HeaderData";
import { fetchCarouselData } from "./data/CarouselData";
import { fetchWWDCCardData } from "./data/CardData";

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
  const [loading, setLoading] = useState(true);
  const [dots, setDots] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchHeaderMainLogo();
        await fetchCarouselData();
        await fetchWWDCCardData();
      } catch (error) {
        console.error("Error fetching header menu data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev % 3) + 1);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <RootLoading>
        <div>Loading{".".repeat(dots)}</div>
      </RootLoading>
    );
  }

  return (
    <rootContext.Provider value={{ state, dispatching }}>
      <ThemeProvider theme={defaultTheme}>
        <RootContainer>
          <GlobalStyle />
          <Header />
          {showProductsServicesWindow.showProductFromBox ||
          showProductsServicesWindow.showProductFromMenu ? (
            <ProductsServicesContainer />
          ) : (
            ""
          )}
          {SearchDone ? (
            <SearchEngineResultList
              results={SearchResults}
              dispatching={dispatching}
            />
          ) : (
            ""
          )}
          <Outlet />
          <Footer />
        </RootContainer>
      </ThemeProvider>
    </rootContext.Provider>
  );
}
