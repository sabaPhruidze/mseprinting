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
} from "../../style/GlobalStyle"; // Make sure the styled components are correctly imported
import { fetchAdvancedMailingServicesData } from "../../data/sub-category data/AllSubCategoryData"; // Import the fetch function
import ImageWithSEO from "../../importantparts/ImageWithCEO"; // Import ImageWithSEO for handling the image
import { DIGITAL_PRINTING_IMAGE } from "../../data/sub-category data/ImageWithCEOData"; // Import the correct image data for AdvancedMailingServices
import { SubCategoryCommonTypes } from "../../types/DataTypes"; // Import the necessary type

export default function AdvancedMailingServices() {
  const [advancedMailingServicesData, setAdvancedMailingServicesData] =
    useState<SubCategoryCommonTypes | null>(null); // Using the SubCategoryCommonTypes type

  useEffect(() => {
    const getAdvancedMailingServicesData = async () => {
      const data = await fetchAdvancedMailingServicesData();
      if (data) {
        setAdvancedMailingServicesData(data);
      }
    };

    getAdvancedMailingServicesData();
  }, []);

  const memoizedData = useMemo(
    () => advancedMailingServicesData,
    [advancedMailingServicesData]
  );
  const navigate = useNavigate();

  return (
    <div>
      {/* Full-screen section with background image using ImageWithSEO */}
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div> {/* Add this overlay div */}
        <ImageWithSEO
          src={DIGITAL_PRINTING_IMAGE.src} // Use ADVANCED_MAILING_SERVICES_IMAGE for the image source
          alt={DIGITAL_PRINTING_IMAGE.alt}
          title={DIGITAL_PRINTING_IMAGE.title}
          geoData={DIGITAL_PRINTING_IMAGE.geoData}
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
