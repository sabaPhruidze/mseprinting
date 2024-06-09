import CarouselComponent from "../importantparts/CarouselComponent";
import WhatWeDoCards from "../importantparts/WhatWeDoCards";
import HomeServices from "../importantparts/HomeServices";
import DoubleCards from "../importantparts/DoubleCards";

export default function Home() {
  return (
    <div>
      <CarouselComponent />
      <WhatWeDoCards />
      <HomeServices />
      <DoubleCards />
    </div>
  );
}
