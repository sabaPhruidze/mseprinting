import { useState, useEffect, useMemo } from "react";
import {
  HomeServicesContainer,
  HomeServicesDarkCover,
  HomeServicesTitle,
  HomeServicesContext,
  HomeServicesButton,
} from "../style/HomeStyles";

import {
  fetchHomeServicesData,
  HomeServicesType,
} from "../data/HomeServicesData";

export default function HomeServices() {
  const [HomeServicesData, setHomeServicesData] = useState<HomeServicesType>({
    image: "",
    link: "",
    text: "",
    title: "",
  });

  useEffect(() => {
    const getHomeServicesData = async () => {
      const data = await fetchHomeServicesData();

      if (data.image && data.image.length > 0) {
        setHomeServicesData(data);
      }
    };

    getHomeServicesData();
  }, []);

  const content = useMemo(
    () => (
      <>
        <HomeServicesTitle>{HomeServicesData.title}</HomeServicesTitle>
        <HomeServicesContext>{HomeServicesData.text}</HomeServicesContext>
        <HomeServicesButton>Learn More ...</HomeServicesButton>
      </>
    ),
    [HomeServicesData]
  );

  return (
    <HomeServicesContainer backgroundImage={HomeServicesData.image}>
      <HomeServicesDarkCover>{content}</HomeServicesDarkCover>
    </HomeServicesContainer>
  );
}
