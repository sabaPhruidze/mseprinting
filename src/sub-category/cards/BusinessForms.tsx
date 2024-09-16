import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import {
  GlobalContainerColumn,
  GlobalPart,
  GlobalRow,
  AlignedTextContainer, // Import the styled component for text alignment
  FullBackgroundContainerZERO, // Updated styled component for the full background
  TitleAndButtonContainer, // Styled component for title and button wrapping
  FullScreenTitle, // Styled component for the main title in the background
  FullScreenButton, // Styled component for the "Request a Quote" button
  GlobalMainContent,
} from "../../style/GlobalStyle";
import { fetchBusinessFormsData } from "../../data/sub-category data/AllSubCategoryData";
import { BusinessFormsType } from "../../types/DataTypes";
import ImageWithSEO from "../../importantparts/ImageWithCEO"; // Import ImageWithSEO for handling the image
import { BUSINESS_FORM_IMAGE } from "../../data/sub-category data/ImageWithCEOData"; // Import the BUSINESS_FORM_IMAGE

export default function BusinessForms() {
  const [businessFormsData, setBusinessFormsData] =
    useState<BusinessFormsType | null>(null);

  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const getBusinessFormsData = async () => {
      const data: BusinessFormsType | null = await fetchBusinessFormsData();
      if (data) {
        setBusinessFormsData(data);
      }
    };

    getBusinessFormsData();
  }, []);

  const memoizedData = useMemo(() => businessFormsData, [businessFormsData]);

  return (
    <div>
      {/* Full-screen section with background image using ImageWithSEO */}
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div> {/* Add this overlay div */}
        <ImageWithSEO
          src={BUSINESS_FORM_IMAGE.src} // Use BUSINESS_FORM_IMAGE for the image source
          alt={BUSINESS_FORM_IMAGE.alt}
          title={BUSINESS_FORM_IMAGE.title}
          geoData={BUSINESS_FORM_IMAGE.geoData}
          loading="eager"
        />
        <TitleAndButtonContainer>
          <FullScreenTitle>{memoizedData?.front?.title}</FullScreenTitle>
          <GlobalMainContent>{memoizedData?.front?.content}</GlobalMainContent>
          <FullScreenButton>{memoizedData?.front?.button}</FullScreenButton>
        </TitleAndButtonContainer>
      </FullBackgroundContainerZERO>

      {/* Text content below the background image */}
      <GlobalContainerColumn>
        <AlignedTextContainer>
          {/* Directly map and render the text */}
          {memoizedData?.two.map((item, index) => (
            <GlobalPart key={index}>{item}</GlobalPart>
          ))}

          <GlobalPart>{memoizedData?.three.firstPart}</GlobalPart>

          {/* Display circle content as a list */}
          {memoizedData?.three.circle.map((item, index) => (
            <GlobalRow key={index}>{item}</GlobalRow>
          ))}

          <GlobalPart>{memoizedData?.three.secondPart}</GlobalPart>
        </AlignedTextContainer>
      </GlobalContainerColumn>
    </div>
  );
}
