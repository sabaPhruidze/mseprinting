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
import { fetchWindowWallFloorGraphicsData } from "../../data/sub-category data/AllSubCategoryData";
import ImageWithSEO from "../../importantparts/ImageWithCEO";
import { WINDOW_WALL_FLOOR_GRAPHICS_IMAGE } from "../../data/sub-category data/ImageWithCEOData";
import { SubCategoryCommonTypes } from "../../types/DataTypes";

export default function WindowWallFloorGraphics() {
  const [windowWallFloorGraphicsData, setWindowWallFloorGraphicsData] =
    useState<SubCategoryCommonTypes | null>(null);

  useEffect(() => {
    const getWindowWallFloorGraphicsData = async () => {
      const data = await fetchWindowWallFloorGraphicsData();
      if (data) {
        setWindowWallFloorGraphicsData(data);
      }
    };

    getWindowWallFloorGraphicsData();
  }, []);

  const memoizedData = useMemo(
    () => windowWallFloorGraphicsData,
    [windowWallFloorGraphicsData]
  );
  const navigate = useNavigate();

  return (
    <div>
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div>
        <ImageWithSEO
          src={WINDOW_WALL_FLOOR_GRAPHICS_IMAGE.src}
          alt={WINDOW_WALL_FLOOR_GRAPHICS_IMAGE.alt}
          title={WINDOW_WALL_FLOOR_GRAPHICS_IMAGE.title}
          geoData={WINDOW_WALL_FLOOR_GRAPHICS_IMAGE.geoData}
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
