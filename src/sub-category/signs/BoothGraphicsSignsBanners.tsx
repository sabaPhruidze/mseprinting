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
import { fetchBoothGraphicsSignsBannersData } from "../../data/sub-category data/AllSubCategoryData";
import ImageWithSEO from "../../importantparts/ImageWithCEO";
import { BOOTH_GRAPHICS_SIGNS_BANNERS_IMAGE } from "../../data/sub-category data/ImageWithCEOData";
import { SubCategoryCommonTypes } from "../../types/DataTypes";

export default function BoothGraphicsSignsBanners() {
  const [boothGraphicsSignsBannersData, setBoothGraphicsSignsBannersData] =
    useState<SubCategoryCommonTypes | null>(null);

  useEffect(() => {
    const getBoothGraphicsSignsBannersData = async () => {
      const data = await fetchBoothGraphicsSignsBannersData();
      if (data) {
        setBoothGraphicsSignsBannersData(data);
      }
    };

    getBoothGraphicsSignsBannersData();
  }, []);

  const memoizedData = useMemo(
    () => boothGraphicsSignsBannersData,
    [boothGraphicsSignsBannersData]
  );
  const navigate = useNavigate();

  return (
    <div>
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div>
        <ImageWithSEO
          src={BOOTH_GRAPHICS_SIGNS_BANNERS_IMAGE.src}
          alt={BOOTH_GRAPHICS_SIGNS_BANNERS_IMAGE.alt}
          title={BOOTH_GRAPHICS_SIGNS_BANNERS_IMAGE.title}
          geoData={BOOTH_GRAPHICS_SIGNS_BANNERS_IMAGE.geoData}
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
