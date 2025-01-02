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
  FloatedImageContainer, // <-- Make sure this is imported
} from "../style/GlobalStyle";
import { fetchGraphicDesignData } from "../data/sub-category data/AllSubCategoryData";
import ImageWithSEO from "../importantparts/ImageWithCEO";
import HelmetComponent from "../importantparts/Helmet"; // Import HelmetComponent for SEO
import { SubCategoryCommonTypes } from "../types/DataTypes";

// Import the main AND the right-side image for Graphic Design
import {
  GRAPHIC_DESIGN_IMAGE_DATA,
  GRAPHIC_DESIGN_IMAGE_RIGHT_IMAGE, // <-- Make sure this export exists in your data file
} from "../data/sub-category data/ImageWithCEOData";

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
      {/* HelmetComponent for SEO */}
      <HelmetComponent
        title="Graphic Design Services | MSE Printing"
        description="Explore professional graphic design services at MSE Printing. From concept to creation, we bring your brand's vision to life."
      />

      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div>
        {/* Main (hero) image */}
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

      {/* Content section with optional right-side image */}
      <GlobalContainerColumn>
        <GlobalTextContainer>
          {/* Conditionally render the right-side image if it exists */}
          {GRAPHIC_DESIGN_IMAGE_RIGHT_IMAGE && (
            <FloatedImageContainer>
              <ImageWithSEO
                src={GRAPHIC_DESIGN_IMAGE_RIGHT_IMAGE.src}
                alt={GRAPHIC_DESIGN_IMAGE_RIGHT_IMAGE.alt}
                title={GRAPHIC_DESIGN_IMAGE_RIGHT_IMAGE.title}
                geoData={GRAPHIC_DESIGN_IMAGE_RIGHT_IMAGE.geoData}
                loading="eager"
              />
            </FloatedImageContainer>
          )}

          {/* Render the rest of the text/content */}
          {memoizedData?.two?.map((item, index) => (
            <GlobalPart key={index}>{item}</GlobalPart>
          ))}
        </GlobalTextContainer>
      </GlobalContainerColumn>
    </div>
  );
}
