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
  fetchCounterPopUpDisplaysData,
  fetchEventLiteratureSignsData,
  fetchGiftsAwardsIncentivesData,
  fetchPrePostShowDirectMailData,
  fetchTableCounterKioskDisplaysData,
} from "../data/sub-category data/AllSubCategoryData";
import {
  COUNTER_POP_UP_DISPLAYS_IMAGE_DATA,
  EVENT_LITERATURE_SIGNS_IMAGE_DATA,
  GIFTS_AWARDS_INCENTIVES_IMAGE_DATA,
  PRE_POST_SHOW_DIRECT_MAIL_IMAGE_DATA,
  TABLE_COUNTER_KIOSK_DISPLAYS_IMAGE_DATA,
} from "../data/sub-category data/ImageWithCEOData";

// Map for each data-fetching function, image data, and SEO metadata
const fetchDataMap: Record<
  string,
  {
    fetchData: () => Promise<SubCategoryCommonTypes | null>;
    image: any;
    title: string; // SEO title for each service
    description: string; // SEO description for each service
    canonical: string; // Canonical URL
  }
> = {
  "counter-pop-up-displays": {
    fetchData: fetchCounterPopUpDisplaysData,
    image: COUNTER_POP_UP_DISPLAYS_IMAGE_DATA,
    title: "Counter Pop-Up Displays | MSE Printing",
    description:
      "Stand out with Counter Pop-Up Displays from MSE Printing, perfect for showcasing products at events.",
    canonical:
      "https://www.mseprinting.com/tradeshow-events/counter-pop-up-displays",
  },
  "event-literature-signs": {
    fetchData: fetchEventLiteratureSignsData,
    image: EVENT_LITERATURE_SIGNS_IMAGE_DATA,
    title: "Event Literature & Signs | MSE Printing",
    description:
      "Engage your audience with Event Literature and Signs crafted by MSE Printing for impactful presentations.",
    canonical:
      "https://www.mseprinting.com/tradeshow-events/event-literature-signs",
  },
  "gifts-awards-incentives": {
    fetchData: fetchGiftsAwardsIncentivesData,
    image: GIFTS_AWARDS_INCENTIVES_IMAGE_DATA,
    title: "Gifts, Awards & Incentives | MSE Printing",
    description:
      "Show appreciation with custom Gifts, Awards, and Incentives from MSE Printing. Celebrate achievements in style.",
    canonical:
      "https://www.mseprinting.com/tradeshow-events/gifts-awards-incentives",
  },
  "pre-post-show-direct-mail": {
    fetchData: fetchPrePostShowDirectMailData,
    image: PRE_POST_SHOW_DIRECT_MAIL_IMAGE_DATA,
    title: "Pre & Post Show Direct Mail | MSE Printing",
    description:
      "Maximize your event impact with Pre & Post Show Direct Mail solutions from MSE Printing.",
    canonical:
      "https://www.mseprinting.com/tradeshow-events/pre-post-show-direct-mail",
  },
  "table-counter-kiosk-displays": {
    fetchData: fetchTableCounterKioskDisplaysData,
    image: TABLE_COUNTER_KIOSK_DISPLAYS_IMAGE_DATA,
    title: "Table & Counter Kiosk Displays | MSE Printing",
    description:
      "Attract attention at events with Table & Counter Kiosk Displays by MSE Printing. Functional and visually engaging.",
    canonical:
      "https://www.mseprinting.com/tradeshow-events/table-counter-kiosk-displays",
  },
};

export default function TradeShowEvents() {
  const location = useLocation();
  const navigate = useNavigate();
  const [eventData, setEventData] = useState<SubCategoryCommonTypes | null>(
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

  const getEventData = useCallback(async () => {
    if (serviceConfig) {
      try {
        const data = await serviceConfig.fetchData();
        setEventData(data);
      } catch (error) {
        console.error(`Error fetching data for event: ${serviceKey}`, error);
      }
    }
  }, [serviceConfig, serviceKey]);

  useEffect(() => {
    getEventData();
  }, [getEventData]);

  const memoizedData = useMemo(() => eventData, [eventData]);

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
