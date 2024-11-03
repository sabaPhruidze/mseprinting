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
  fetchCounterPopUpDisplaysData,
  fetchEventLiteratureSignsData,
  fetchGiftsAwardsIncentivesData,
  fetchPrePostShowDirectMailData,
  fetchTableCounterKioskDisplaysData,
} from "../../data/sub-category data/AllSubCategoryData";
import {
  COUNTER_POP_UP_DISPLAYS_IMAGE_DATA,
  EVENT_LITERATURE_SIGNS_IMAGE_DATA,
  GIFTS_AWARDS_INCENTIVES_IMAGE_DATA,
  PRE_POST_SHOW_DIRECT_MAIL_IMAGE_DATA,
  TABLE_COUNTER_KIOSK_DISPLAYS_IMAGE_DATA,
} from "../../data/sub-category data/ImageWithCEOData";

// Map for each data-fetching function and corresponding image data
const fetchDataMap: Record<
  string,
  { fetchData: () => Promise<SubCategoryCommonTypes | null>; image: any }
> = {
  "counter-pop-up-displays": {
    fetchData: fetchCounterPopUpDisplaysData,
    image: COUNTER_POP_UP_DISPLAYS_IMAGE_DATA,
  },
  "event-literature-signs": {
    fetchData: fetchEventLiteratureSignsData,
    image: EVENT_LITERATURE_SIGNS_IMAGE_DATA,
  },
  "gifts-awards-incentives": {
    fetchData: fetchGiftsAwardsIncentivesData,
    image: GIFTS_AWARDS_INCENTIVES_IMAGE_DATA,
  },
  "pre-post-show-direct-mail": {
    fetchData: fetchPrePostShowDirectMailData,
    image: PRE_POST_SHOW_DIRECT_MAIL_IMAGE_DATA,
  },
  "table-counter-kiosk-displays": {
    fetchData: fetchTableCounterKioskDisplaysData,
    image: TABLE_COUNTER_KIOSK_DISPLAYS_IMAGE_DATA,
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
