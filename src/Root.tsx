import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import UseReducerComponent from "./importantparts/UseReducerComponent";
import { GlobalStyle } from "./style/GlobalStyle";
import { RootContainer } from "./style/RootStyle";
import { defaultTheme } from "./style/Themes";
import Header from "./outsideoutlet/Header";
import { Outlet } from "react-router-dom";
import Footer from "./outsideoutlet/Footer";
import { InitialState } from "./importantparts/UseReducerComponent";
import { fetchHeaderMenuData } from "./data/HeaderData"; // Adjust the path as needed

interface RootContextProps {
  state: InitialState;
  dispatching: (type: string, payload: any) => void;
}

export const rootContext = createContext<RootContextProps | undefined>(
  undefined
);

export default function Root() {
  const { state, dispatching } = UseReducerComponent();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchHeaderMenuData(); // Fetch data
      } catch (error) {
        console.error("Error fetching header menu data: ", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator
  }

  return (
    <rootContext.Provider value={{ state, dispatching }}>
      <ThemeProvider theme={defaultTheme}>
        <RootContainer>
          <GlobalStyle />
          <Header />
          <Outlet />
          <Footer />
        </RootContainer>
      </ThemeProvider>
    </rootContext.Provider>
  );
}
