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
import { ADA_WAYFINDING_SIGNS_IMAGE } from "../../data/sub-category data/ImageWithCEOData";
import { SubCategoryCommonTypes } from "../../types/DataTypes";
import {
  fetchCounterPopUpDisplaysData,
  fetchEventLiteratureSignsData,
  fetchGiftsAwardsIncentivesData,
  fetchPrePostShowDirectMailData,
  fetchTableCounterKioskDisplaysData,
} from "../../data/sub-category data/AllSubCategoryData";

const fetchDataMap: Record<
  string,
  () => Promise<SubCategoryCommonTypes | null>
> = {
  "counter-pop-up-displays": fetchCounterPopUpDisplaysData,
  "event-literature-signs": fetchEventLiteratureSignsData,
  "gifts-awards-incentives": fetchGiftsAwardsIncentivesData,
  "pre-post-show-direct-mail": fetchPrePostShowDirectMailData,
  "table-counter-kiosk-displays": fetchTableCounterKioskDisplaysData,
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

  const getEventData = useCallback(async () => {
    const fetchData = serviceKey ? fetchDataMap[serviceKey] : null;
    if (fetchData) {
      try {
        const data = await fetchData();
        setEventData(data);
      } catch (error) {
        console.error(`Error fetching data for event: ${serviceKey}`, error);
      }
    }
  }, [serviceKey]);

  useEffect(() => {
    getEventData();
  }, [getEventData]);

  const memoizedData = useMemo(() => eventData, [eventData]);

  return (
    <div>
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div>
        <ImageWithSEO
          src={ADA_WAYFINDING_SIGNS_IMAGE.src}
          alt={ADA_WAYFINDING_SIGNS_IMAGE.alt}
          title={ADA_WAYFINDING_SIGNS_IMAGE.title}
          geoData={ADA_WAYFINDING_SIGNS_IMAGE.geoData}
          loading="eager"
        />
        <TitleAndButtonContainer>
          <FullScreenTitle>{memoizedData?.one?.title}</FullScreenTitle>
          <GlobalMainContent>{memoizedData?.one?.content}</GlobalMainContent>
          <FullScreenButton onClick={() => navigate("/request-quote")}>
            {memoizedData?.one?.button}
          </FullScreenButton>
        </TitleAndButtonContainer>
      </FullBackgroundContainerZERO>

      <GlobalContainerColumn>
        <GlobalTextContainer>
          {memoizedData?.two?.map((item, index) => (
            <GlobalPart key={index}>{item}</GlobalPart>
          ))}
        </GlobalTextContainer>
      </GlobalContainerColumn>
    </div>
  );
}
