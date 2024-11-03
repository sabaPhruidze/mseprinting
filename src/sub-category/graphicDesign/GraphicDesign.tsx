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
import { fetchGraphicDesignData } from "../../data/sub-category data/AllSubCategoryData";
import ImageWithSEO from "../../importantparts/ImageWithCEO";
import { GRAPHIC_DESIGN_IMAGE_DATA } from "../../data/sub-category data/ImageWithCEOData"; // Updated to use Graphic Design image
import { SubCategoryCommonTypes } from "../../types/DataTypes";

export default function GraphicDesign() {
  const [graphicDesignData, setGraphicDesignData] =
    useState<SubCategoryCommonTypes | null>(null);

  useEffect(() => {
    const getGraphicDesignData = async () => {
      const data = await fetchGraphicDesignData();
      if (data) {
        setGraphicDesignData(data);
      }
    };

    getGraphicDesignData();
  }, []);

  const memoizedData = useMemo(() => graphicDesignData, [graphicDesignData]);
  const navigate = useNavigate();

  return (
    <div>
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div>
        <ImageWithSEO
          src={GRAPHIC_DESIGN_IMAGE_DATA.src}
          alt={GRAPHIC_DESIGN_IMAGE_DATA.alt}
          title={GRAPHIC_DESIGN_IMAGE_DATA.title}
          geoData={GRAPHIC_DESIGN_IMAGE_DATA.geoData}
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
