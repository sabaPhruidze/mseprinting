import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
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
import { fetchTradeshowEventSignsData } from "../../data/sub-category data/AllSubCategoryData";
import ImageWithSEO from "../../importantparts/ImageWithCEO";
import { TRADESHOW_EVENT_SIGNS_IMAGE } from "../../data/sub-category data/ImageWithCEOData";
import { SubCategoryCommonTypes } from "../../types/DataTypes";

export default function TradeshowEventSigns() {
  const [tradeshowEventSignsData, setTradeshowEventSignsData] =
    useState<SubCategoryCommonTypes | null>(null);

  useEffect(() => {
    const getTradeshowEventSignsData = async () => {
      const data = await fetchTradeshowEventSignsData();
      if (data) {
        setTradeshowEventSignsData(data);
      }
    };

    getTradeshowEventSignsData();
  }, []);

  const memoizedData = useMemo(
    () => tradeshowEventSignsData,
    [tradeshowEventSignsData]
  );
  const navigate = useNavigate();

  return (
    <div>
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div>
        <ImageWithSEO
          src={TRADESHOW_EVENT_SIGNS_IMAGE.src}
          alt={TRADESHOW_EVENT_SIGNS_IMAGE.alt}
          title={TRADESHOW_EVENT_SIGNS_IMAGE.title}
          geoData={TRADESHOW_EVENT_SIGNS_IMAGE.geoData}
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
          {memoizedData?.two.map((item, index) => (
            <GlobalPart key={index}>{item}</GlobalPart>
          ))}
        </GlobalTextContainer>
      </GlobalContainerColumn>
    </div>
  );
}
