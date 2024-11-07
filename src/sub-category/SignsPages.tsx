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
} from "../style/GlobalStyle";
import ImageWithSEO from "../importantparts/ImageWithCEO";
import HelmetComponent from "../importantparts/Helmet"; // Import HelmetComponent for SEO
import { SubCategoryCommonTypes } from "../types/DataTypes";
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
} from "../data/sub-category data/AllSubCategoryData";
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
} from "../data/sub-category data/ImageWithCEOData";

// Map for data-fetching functions, image data, and SEO metadata
const fetchDataMap: Record<
  string,
  {
    fetchData: () => Promise<SubCategoryCommonTypes | null>;
    image: any;
    title: string; // SEO title for each service
    description: string; // SEO description for each service
  }
> = {
  "ada-wayfinding-signs": {
    fetchData: fetchADAWayfindingSignsData,
    image: ADA_WAYFINDING_SIGNS_IMAGE,
    title: "ADA Wayfinding Signs | MSE Printing",
    description:
      "Navigate with ease using MSE Printing's ADA-compliant Wayfinding Signs. Clear and accessible signage solutions.",
  },
  "booth-graphics-signs-banners": {
    fetchData: fetchBoothGraphicsSignsBannersData,
    image: BOOTH_GRAPHICS_SIGNS_BANNERS_IMAGE,
    title: "Booth Graphics & Banners | MSE Printing",
    description:
      "Stand out at your next event with custom Booth Graphics, Signs, and Banners by MSE Printing.",
  },
  "car-graphics-wraps": {
    fetchData: fetchCarGraphicsWrapsData,
    image: CAR_GRAPHICS_WRAPS_IMAGE,
    title: "Car Graphics & Wraps | MSE Printing",
    description:
      "Promote your brand on the go with eye-catching Car Graphics and Wraps by MSE Printing.",
  },
  "interior-office-lobby-decor": {
    fetchData: fetchInteriorOfficeLobbyDecorData,
    image: INTERIOR_OFFICE_LOBBY_DECOR_IMAGE,
    title: "Interior Office & Lobby Decor | MSE Printing",
    description:
      "Enhance your workspace with custom Interior Office and Lobby Decor solutions from MSE Printing.",
  },
  "delivery-takeout-signs": {
    fetchData: fetchDeliveryTakeoutSignsData,
    image: DELIVERY_TAKOUT_SIGNS_IMAGE,
    title: "Delivery & Takeout Signs | MSE Printing",
    description:
      "Efficiently guide customers with high-quality Delivery and Takeout Signs by MSE Printing.",
  },
  "now-open-signs-graphics": {
    fetchData: fetchNowOpenSignsGraphicsData,
    image: NOW_OPEN_SIGNS_GRAPHICS_IMAGE,
    title: "Now Open Signs & Graphics | MSE Printing",
    description:
      "Announce your opening with bold and attractive Now Open Signs and Graphics by MSE Printing.",
  },
  "pullup-banners-flags": {
    fetchData: fetchPullupBannersFlagsData,
    image: PULL_UP_BANNERS_FLAGS_IMAGE,
    title: "Pull-up Banners & Flags | MSE Printing",
    description:
      "Portable, impactful Pull-up Banners and Flags by MSE Printing. Perfect for events and promotions.",
  },
  "tradeshow-event-signs": {
    fetchData: fetchTradeshowEventSignsData,
    image: TRADESHOW_EVENT_SIGNS_IMAGE,
    title: "Tradeshow & Event Signs | MSE Printing",
    description:
      "Make your brand memorable at events with custom Tradeshow and Event Signs from MSE Printing.",
  },
  "window-wall-floor-graphics": {
    fetchData: fetchWindowWallFloorGraphicsData,
    image: WINDOW_WALL_FLOOR_GRAPHICS_IMAGE,
    title: "Window, Wall & Floor Graphics | MSE Printing",
    description:
      "Transform any space with Window, Wall, and Floor Graphics by MSE Printing. Bold and customizable.",
  },
  "yard-outdoor-signs": {
    fetchData: fetchYardOutdoorSignsData,
    image: YARD_OUTDOOR_SIGNS_IMAGE,
    title: "Yard & Outdoor Signs | MSE Printing",
    description:
      "Durable and weather-resistant Yard and Outdoor Signs from MSE Printing for effective outdoor advertising.",
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
      {/* HelmetComponent for SEO */}
      {serviceConfig && (
        <HelmetComponent
          title={serviceConfig.title}
          description={serviceConfig.description}
        />
      )}

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
