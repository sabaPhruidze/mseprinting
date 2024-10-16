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
import { fetchNowOpenSignsGraphicsData } from "../../data/sub-category data/AllSubCategoryData";
import ImageWithSEO from "../../importantparts/ImageWithCEO";
import { NOW_OPEN_SIGNS_GRAPHICS_IMAGE } from "../../data/sub-category data/ImageWithCEOData";
import { SubCategoryCommonTypes } from "../../types/DataTypes";

export default function NowOpenSignsGraphics() {
  const [nowOpenSignsGraphicsData, setNowOpenSignsGraphicsData] =
    useState<SubCategoryCommonTypes | null>(null);

  useEffect(() => {
    const getNowOpenSignsGraphicsData = async () => {
      const data = await fetchNowOpenSignsGraphicsData();
      if (data) {
        setNowOpenSignsGraphicsData(data);
      }
    };

    getNowOpenSignsGraphicsData();
  }, []);

  const memoizedData = useMemo(
    () => nowOpenSignsGraphicsData,
    [nowOpenSignsGraphicsData]
  );
  const navigate = useNavigate();

  return (
    <div>
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div>
        <ImageWithSEO
          src={NOW_OPEN_SIGNS_GRAPHICS_IMAGE.src}
          alt={NOW_OPEN_SIGNS_GRAPHICS_IMAGE.alt}
          title={NOW_OPEN_SIGNS_GRAPHICS_IMAGE.title}
          geoData={NOW_OPEN_SIGNS_GRAPHICS_IMAGE.geoData}
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
