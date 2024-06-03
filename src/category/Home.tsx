import { useContext } from "react";
import { rootContext } from "../Root";
import CarouselComponent from "../importantparts/CarouselComponent";
import WhatWeDoCards from "../importantparts/WhatWeDoCards";
import HomeServices from "../importantparts/HomeServices";
import DoubleCards from "../importantparts/DoubleCards";
export default function Home() {
  const context = useContext(rootContext);

  if (!context) {
    throw new Error("useContext must be used within a rootContext.Provider");
  }

  // const { state, dispatching } = context;
  // const { name } = state;

  return (
    <div>
      <CarouselComponent />
      <WhatWeDoCards />
      <HomeServices />
      <DoubleCards />
    </div>
  );
}
