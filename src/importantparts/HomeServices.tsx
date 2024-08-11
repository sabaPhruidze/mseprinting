import { useState, useEffect, useMemo } from "react";
import {
  HomeServicesContainer,
  HomeServicesDarkCover,
  HomeServicesTitle,
  HomeServicesContext,
  HomeServicesButton,
} from "../style/HomeStyles";

import { useNavigate } from "react-router-dom";
import { fetchHomeServicesBannerData } from "../data/HomeServicesData";
import { HomeServicesType } from "../types/DataTypes";

export default function HomeServices() {
  const [homeServicesData, setHomeServicesData] = useState<HomeServicesType>({
    image: "",
    link: "",
    text: "",
    title: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const getHomeServicesData = async () => {
      const data = await fetchHomeServicesBannerData();

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
        {homeServicesData.link && (
          <HomeServicesButton
            onClick={() =>
              navigate(homeServicesData.link || "/productsservices")
            }
          >
            Learn More ...
          </HomeServicesButton>
        )}
      </>
    ),
    [homeServicesData, navigate]
  );

  return (
    <HomeServicesContainer $backgroundimage={homeServicesData.image}>
      {homeServicesData.link && (
        <HomeServicesDarkCover>{content}</HomeServicesDarkCover>
      )}
    </HomeServicesContainer>
  );
}
