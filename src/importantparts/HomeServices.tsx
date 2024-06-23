import { useState, useEffect, useMemo } from "react";
import {
  HomeServicesContainer,
  HomeServicesDarkCover,
  HomeServicesTitle,
  HomeServicesContext,
  HomeServicesButton,
} from "../style/HomeStyles";

import { fetchHomeServicesData } from "../data/HomeServicesData";
import { HomeServicesType } from "../types/DataTypes";

export default function HomeServices() {
  const [homeServicesData, setHomeServicesData] = useState<HomeServicesType>({
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
        <HomeServicesTitle>{homeServicesData.title}</HomeServicesTitle>
        <HomeServicesContext>{homeServicesData.text}</HomeServicesContext>
        <HomeServicesButton>Learn More ...</HomeServicesButton>
      </>
    ),
    [homeServicesData]
  );

  return (
    <HomeServicesContainer $backgroundimage={homeServicesData.image}>
      <HomeServicesDarkCover>{content}</HomeServicesDarkCover>
    </HomeServicesContainer>
  );
}
