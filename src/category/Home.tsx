import { useContext, useMemo } from "react";
import { rootContext } from "../Root";
import CarouselComponent from "../importantparts/CarouselComponent";
import WhatWeDoCards from "../importantparts/WhatWeDoCards";
import HomeServices from "../importantparts/HomeServices";
import TwoButtons from "../importantparts/TwoButtons";
import SuccesfullySend from "../importantparts/SuccesfullySend";

export default function Home() {
  const context = useContext(rootContext);

  if (!context) {
    throw new Error("rootContext must be used within a Root provider");
  }

  const { state } = context;
  const { rqSSend } = useMemo(() => state, [state.rqSSend]);

  return (
    <div style={{ position: "relative" }}>
      <CarouselComponent />
      <WhatWeDoCards />
      <HomeServices />
      <TwoButtons />
      {rqSSend && <SuccesfullySend />}
    </div>
  );
}
