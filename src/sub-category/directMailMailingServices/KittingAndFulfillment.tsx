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
} from "../../style/GlobalStyle"; // Ensure the styled components are correctly imported
import { fetchKittingAndFulfillmentData } from "../../data/sub-category data/AllSubCategoryData"; // Import the fetch function
import ImageWithSEO from "../../importantparts/ImageWithCEO"; // Import ImageWithSEO for handling the image
import { KITTING_FULLFILLMENT_IMAGE } from "../../data/sub-category data/ImageWithCEOData"; // Use the correct image for KittingAndFulfillment
import { SubCategoryCommonTypes } from "../../types/DataTypes"; // Import the necessary type

export default function KittingAndFulfillment() {
  const [kittingAndFulfillmentData, setKittingAndFulfillmentData] =
    useState<SubCategoryCommonTypes | null>(null); // Using SubCategoryCommonTypes type

  useEffect(() => {
    const getKittingAndFulfillmentData = async () => {
      const data = await fetchKittingAndFulfillmentData();
      if (data) {
        setKittingAndFulfillmentData(data);
      }
    };

    getKittingAndFulfillmentData();
  }, []);

  const memoizedData = useMemo(
    () => kittingAndFulfillmentData,
    [kittingAndFulfillmentData]
  );
  const navigate = useNavigate();

  return (
    <div>
      {/* Full-screen section with background image using ImageWithSEO */}
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div> {/* Add this overlay div */}
        <ImageWithSEO
          src={KITTING_FULLFILLMENT_IMAGE.src} // Keep using DIGITAL_PRINTING_IMAGE
          alt={KITTING_FULLFILLMENT_IMAGE.alt}
          title={KITTING_FULLFILLMENT_IMAGE.title}
          geoData={KITTING_FULLFILLMENT_IMAGE.geoData}
          loading="eager"
        />
        <TitleAndButtonContainer>
          <FullScreenTitle>{memoizedData?.one?.title}</FullScreenTitle>
          <GlobalMainContent>{memoizedData?.one?.content}</GlobalMainContent>
          <FullScreenButton
            onClick={() => {
              navigate("/request-quote");
            }}
          >
            {memoizedData?.one?.button}
          </FullScreenButton>
        </TitleAndButtonContainer>
      </FullBackgroundContainerZERO>

      {/* Text content below the background image */}
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
