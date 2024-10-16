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
import { CarouselType } from "../types/DataTypes";

export default function HomeServices() {
  const [homeServicesData, setHomeServicesData] = useState<CarouselType | null>(
    null
  );
  const navigate = useNavigate();

  useEffect(() => {
    const getHomeServicesData = async () => {
      const data = await fetchHomeServicesBannerData();

      if (data && data.image && data.image.length > 0) {
        setHomeServicesData(data);
      }
    };

    getHomeServicesData();
  }, []);

  const content = useMemo(
    () =>
      homeServicesData ? (
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
      ) : null,
    [homeServicesData, navigate]
  );

  return (
    <HomeServicesContainer $backgroundimage={homeServicesData?.image || ""}>
      {homeServicesData && homeServicesData.link && (
        <HomeServicesDarkCover>{content}</HomeServicesDarkCover>
      )}
    </HomeServicesContainer>
  );
}
