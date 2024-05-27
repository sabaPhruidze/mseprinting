import { createContext, useReducer } from "react";
import { ThemeProvider } from "styled-components";
import UseReducerComponent from "./importantparts/UseReducerComponent";

import { GlobalStyle } from "./style/GlobalStyle";
import { RootContainer, RootOutlet } from "./style/RootStyle";

import Header from "./outsideoutlet/Header";
import { Outlet } from "react-router-dom";
import Footer from "./outsideoutlet/Footer";

export const rootContext = createContext({});

export default function Root() {
  const ReducerFunction = UseReducerComponent();
  const [state, dispatching] = ReducerFunction;
  return (
    <rootContext.Provider value={{ state, dispatching }}>
      <RootContainer>
        <GlobalStyle />
        <Header />
        <RootOutlet>
          <Outlet />
        </RootOutlet>
        <Footer />
      </RootContainer>
    </rootContext.Provider>
  );
}
