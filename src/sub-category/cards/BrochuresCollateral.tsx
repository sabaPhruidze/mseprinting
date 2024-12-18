import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  GlobalContainerColumn,
  GlobalPart,
  FullBackgroundContainerZERO,
  TitleAndButtonContainer,
  FullScreenTitle,
  FullScreenButton,
  GlobalMainContent,
  FloatedImageContainer,
  AlignedTextContainer,
} from "../../style/GlobalStyle";
import { fetchBrochuresCollateralData } from "../../data/sub-category data/AllSubCategoryData";
import { CommonDocumentWAS } from "../../types/DataTypes";
import ImageWithSEO from "../../importantparts/ImageWithCEO";
import {
  BROCHURES_COLLATERALS_IMAGE,
  BROCHURES_COLLATERAL_RIGHT_IMAGE,
} from "../../data/sub-category data/ImageWithCEOData";
import HelmetComponent from "../../importantparts/Helmet"; // Import HelmetComponent for SEO

export default function BrochuresCollateral() {
  const [brochuresCollateralData, setBrochuresCollateralData] =
    useState<CommonDocumentWAS | null>(null);

  useEffect(() => {
    const getBrochuresCollateralData = async () => {
      const data = await fetchBrochuresCollateralData();
      if (data) {
        setBrochuresCollateralData(data);
      }
    };

    getBrochuresCollateralData();
  }, []);

  const memoizedData = useMemo(
    () => brochuresCollateralData,
    [brochuresCollateralData]
  );
  const navigate = useNavigate();

  return (
    <div>
      {/* HelmetComponent for SEO */}
      <HelmetComponent
        title="Brochures & Collateral | MSE Printing"
        description="Explore our professional brochures and collateral services to elevate your brand's marketing materials. Order custom brochures at MSE Printing."
      />

      {/* Full-screen section with background image using ImageWithSEO */}
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div> {/* Add this overlay div */}
        <ImageWithSEO
          src={BROCHURES_COLLATERALS_IMAGE.src}
          alt={BROCHURES_COLLATERALS_IMAGE.alt}
          title={BROCHURES_COLLATERALS_IMAGE.title}
          geoData={BROCHURES_COLLATERALS_IMAGE.geoData}
          loading="eager"
        />
        <TitleAndButtonContainer>
          <FullScreenTitle>{memoizedData?.front?.title}</FullScreenTitle>
          <GlobalMainContent>{memoizedData?.front?.content}</GlobalMainContent>
          <FullScreenButton
            onClick={() => {
              navigate("/request-quote");
            }}
          >
            {memoizedData?.front?.button}
          </FullScreenButton>
        </TitleAndButtonContainer>
      </FullBackgroundContainerZERO>

      {/* Text content below the background image */}
      <GlobalContainerColumn>
        <AlignedTextContainer>
          {/* Floated image on the right */}
          <FloatedImageContainer>
            <ImageWithSEO
              src={BROCHURES_COLLATERAL_RIGHT_IMAGE.src}
              alt={BROCHURES_COLLATERAL_RIGHT_IMAGE.alt}
              title={BROCHURES_COLLATERAL_RIGHT_IMAGE.title}
              geoData={BROCHURES_COLLATERAL_RIGHT_IMAGE.geoData}
              loading="lazy"
            />
          </FloatedImageContainer>

          {/* The text will wrap around the above floated image */}
          {memoizedData?.two.map((item, index) => (
            <GlobalPart key={index}>{item}</GlobalPart>
          ))}
        </AlignedTextContainer>
      </GlobalContainerColumn>
    </div>
  );
}
