import { useContext, useMemo } from "react";
import { rootContext } from "../Root";
import CarouselComponent from "../importantparts/CarouselComponent";
import WhatWeDoCards from "../importantparts/WhatWeDoCards";
import HomeServices from "../importantparts/HomeServices";
import TwoButtons from "../importantparts/TwoButtons";
import SuccesfullySend from "../importantparts/SuccesfullySend";
import HelmetComponent from "../importantparts/Helmet"; // Import HelmetComponent for SEO

export default function Home() {
  const context = useContext(rootContext);

  if (!context) {
    throw new Error("rootContext must be used within a Root provider");
  }

  const { state } = context;
  const { rqSSend } = useMemo(() => state, [state.rqSSend]);

  return (
    <div style={{ position: "relative" }}>
      {/* HelmetComponent for SEO */}
      <HelmetComponent
        title=" MSE Printing - Premium Printing & Marketing Solutions"
        description="Discover our wide range of high-quality printing, signage, and marketing solutions to elevate your brand."
        canonical="https://www.mseprinting.com/"
      />
      <CarouselComponent />
      <WhatWeDoCards />
      <HomeServices />
      <TwoButtons />
      {rqSSend && <SuccesfullySend />}
    </div>
  );
}
