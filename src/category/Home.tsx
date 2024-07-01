import CarouselComponent from "../importantparts/CarouselComponent";
import WhatWeDoCards from "../importantparts/WhatWeDoCards";
import HomeServices from "../importantparts/HomeServices";

import TwoButtons from "../importantparts/TwoButtons";

export default function Home() {
  return (
    <div>
      <CarouselComponent />
      <WhatWeDoCards />
      <HomeServices />
      <TwoButtons />
    </div>
  );
}
