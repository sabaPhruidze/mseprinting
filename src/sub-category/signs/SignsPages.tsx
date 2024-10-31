import { useEffect, useState, useMemo, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  GlobalContainerColumn,
  GlobalPart,
  GlobalTextContainer,
  FullBackgroundContainerZERO,
  TitleAndButtonContainer,
  FullScreenTitle,
  FullScreenButton,
  GlobalMainContent,
} from "../../style/GlobalStyle";
import ImageWithSEO from "../../importantparts/ImageWithCEO";
import { SubCategoryCommonTypes } from "../../types/DataTypes";
import {
  fetchADAWayfindingSignsData,
  fetchBoothGraphicsSignsBannersData,
  fetchCarGraphicsWrapsData,
  fetchDeliveryTakeoutSignsData,
  fetchInteriorOfficeLobbyDecorData,
  fetchNowOpenSignsGraphicsData,
  fetchPullupBannersFlagsData,
  fetchTradeshowEventSignsData,
  fetchWindowWallFloorGraphicsData,
  fetchYardOutdoorSignsData,
} from "../../data/sub-category data/AllSubCategoryData";
import {
  ADA_WAYFINDING_SIGNS_IMAGE,
  BOOTH_GRAPHICS_SIGNS_BANNERS_IMAGE,
  CAR_GRAPHICS_WRAPS_IMAGE,
  DELIVERY_TAKOUT_SIGNS_IMAGE,
  INTERIOR_OFFICE_LOBBY_DECOR_IMAGE,
  NOW_OPEN_SIGNS_GRAPHICS_IMAGE,
  PULL_UP_BANNERS_FLAGS_IMAGE,
  TRADESHOW_EVENT_SIGNS_IMAGE,
  WINDOW_WALL_FLOOR_GRAPHICS_IMAGE,
  YARD_OUTDOOR_SIGNS_IMAGE,
} from "../../data/sub-category data/ImageWithCEOData";

// Map for data-fetching functions and corresponding image data
const fetchDataMap: Record<
  string,
  { fetchData: () => Promise<SubCategoryCommonTypes | null>; image: any }
> = {
  "ada-wayfinding-signs": {
    fetchData: fetchADAWayfindingSignsData,
    image: ADA_WAYFINDING_SIGNS_IMAGE,
  },
  "booth-graphics-signs-banners": {
    fetchData: fetchBoothGraphicsSignsBannersData,
    image: BOOTH_GRAPHICS_SIGNS_BANNERS_IMAGE,
  },
  "car-graphics-wraps": {
    fetchData: fetchCarGraphicsWrapsData,
    image: CAR_GRAPHICS_WRAPS_IMAGE,
  },
  "interior-office-lobby-decor": {
    fetchData: fetchInteriorOfficeLobbyDecorData,
    image: INTERIOR_OFFICE_LOBBY_DECOR_IMAGE,
  },
  "delivery-takeout-signs": {
    fetchData: fetchDeliveryTakeoutSignsData,
    image: DELIVERY_TAKOUT_SIGNS_IMAGE,
  },
  "now-open-signs-graphics": {
    fetchData: fetchNowOpenSignsGraphicsData,
    image: NOW_OPEN_SIGNS_GRAPHICS_IMAGE,
  },
  "pullup-banners-flags": {
    fetchData: fetchPullupBannersFlagsData,
    image: PULL_UP_BANNERS_FLAGS_IMAGE,
  },
  "tradeshow-event-signs": {
    fetchData: fetchTradeshowEventSignsData,
    image: TRADESHOW_EVENT_SIGNS_IMAGE,
  },
  "window-wall-floor-graphics": {
    fetchData: fetchWindowWallFloorGraphicsData,
    image: WINDOW_WALL_FLOOR_GRAPHICS_IMAGE,
  },
  "yard-outdoor-signs": {
    fetchData: fetchYardOutdoorSignsData,
    image: YARD_OUTDOOR_SIGNS_IMAGE,
  },
};

export default function SignsPages() {
  const location = useLocation();
  const navigate = useNavigate();
  const [serviceData, setServiceData] = useState<SubCategoryCommonTypes | null>(
    null
  );

  const serviceKey = useMemo(
    () => location.pathname.split("/").pop()?.toLowerCase(),
    [location.pathname]
  );
  console.log(serviceKey);
  // Memoize the fetch and image data to avoid recalculating unnecessarily
  const serviceConfig = useMemo(
    () => (serviceKey ? fetchDataMap[serviceKey] : null),
    [serviceKey]
  );

  const getServiceData = useCallback(async () => {
    if (serviceConfig) {
      try {
        const data = await serviceConfig.fetchData();
        setServiceData(data);
      } catch (error) {
        console.error(`Error fetching data for service: ${serviceKey}`, error);
      }
    }
  }, [serviceConfig, serviceKey]);

  useEffect(() => {
    if (serviceConfig) {
      getServiceData();
    }
  }, [getServiceData, serviceConfig]);

  const memoizedData = useMemo(() => serviceData, [serviceData]);

  return (
    <div>
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div>
        {serviceConfig && (
          <ImageWithSEO
            src={serviceConfig.image.src}
            alt={serviceConfig.image.alt}
            title={serviceConfig.image.title}
            geoData={serviceConfig.image.geoData}
            loading="eager"
          />
        )}
        <TitleAndButtonContainer>
          <FullScreenTitle>
            {memoizedData?.one?.title || "Default Title"}
          </FullScreenTitle>
          <GlobalMainContent>
            {memoizedData?.one?.content || "Content unavailable."}
          </GlobalMainContent>
          <FullScreenButton onClick={() => navigate("/request-quote")}>
            {memoizedData?.one?.button || "Request a Quote"}
          </FullScreenButton>
        </TitleAndButtonContainer>
      </FullBackgroundContainerZERO>

      <GlobalContainerColumn>
        <GlobalTextContainer>
          {memoizedData?.two ? (
            memoizedData.two.map((item, index) => (
              <GlobalPart key={index}>{item}</GlobalPart>
            ))
          ) : (
            <p>Additional information is unavailable.</p>
          )}
        </GlobalTextContainer>
      </GlobalContainerColumn>
    </div>
  );
}
