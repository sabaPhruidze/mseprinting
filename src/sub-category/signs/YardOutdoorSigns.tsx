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
import { fetchYardOutdoorSignsData } from "../../data/sub-category data/AllSubCategoryData";
import ImageWithSEO from "../../importantparts/ImageWithCEO";
import { YARD_OUTDOOR_SIGNS_IMAGE } from "../../data/sub-category data/ImageWithCEOData";
import { SubCategoryCommonTypes } from "../../types/DataTypes";

export default function YardOutdoorSigns() {
  const [yardOutdoorSignsData, setYardOutdoorSignsData] =
    useState<SubCategoryCommonTypes | null>(null);

  useEffect(() => {
    const getYardOutdoorSignsData = async () => {
      const data = await fetchYardOutdoorSignsData();
      if (data) {
        setYardOutdoorSignsData(data);
      }
    };

    getYardOutdoorSignsData();
  }, []);

  const memoizedData = useMemo(
    () => yardOutdoorSignsData,
    [yardOutdoorSignsData]
  );
  const navigate = useNavigate();

  return (
    <div>
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div>
        <ImageWithSEO
          src={YARD_OUTDOOR_SIGNS_IMAGE.src}
          alt={YARD_OUTDOOR_SIGNS_IMAGE.alt}
          title={YARD_OUTDOOR_SIGNS_IMAGE.title}
          geoData={YARD_OUTDOOR_SIGNS_IMAGE.geoData}
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
