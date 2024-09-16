import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import {
  GlobalContainerColumn,
  GlobalPart,
  GlobalTextContainer, // Import the styled component for text wrapping
  FullBackgroundContainerZERO, // Updated styled component for the full background
  TitleAndButtonContainer, // Styled component for title and button wrapping
  FullScreenTitle, // Styled component for the main title in the background
  FullScreenButton, // Styled component for the "Request a Quote" button
  GlobalMainContent,
} from "../../style/GlobalStyle";
import { fetchMKBookletsData } from "../../data/sub-category data/AllSubCategoryData";
import { CommonDocumentWAS } from "../../types/DataTypes";
import ImageWithSEO from "../../importantparts/ImageWithCEO"; // Import ImageWithSEO for handling the image
import { CATALOGYS_BOOKLETS_IMAGE } from "../../data/sub-category data/ImageWithCEOData"; // Import the CATALOGYS_BOOKLETS_IMAGE

export default function MCBooklets() {
  const [mcBookletsData, setMcBookletsData] =
    useState<CommonDocumentWAS | null>(null);

  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const getMcBookletsData = async () => {
      const data: CommonDocumentWAS | null = await fetchMKBookletsData();
      if (data) {
        setMcBookletsData(data);
      }
    };

    getMcBookletsData();
  }, []);

  const memoizedData = useMemo(() => mcBookletsData, [mcBookletsData]);

  return (
    <div>
      {/* Full-screen section with background image using ImageWithSEO */}
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div> {/* Add this overlay div */}
        <ImageWithSEO
          src={CATALOGYS_BOOKLETS_IMAGE.src} // Use CATALOGYS_BOOKLETS_IMAGE for the image source
          alt={CATALOGYS_BOOKLETS_IMAGE.alt}
          title={CATALOGYS_BOOKLETS_IMAGE.title}
          geoData={CATALOGYS_BOOKLETS_IMAGE.geoData}
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
        <GlobalTextContainer>
          {/* Render content below the background */}
          <GlobalPart>{memoizedData?.one.content}</GlobalPart>

          {memoizedData?.two.map((item, index) => (
            <GlobalPart key={index}>{item}</GlobalPart>
          ))}
        </GlobalTextContainer>
      </GlobalContainerColumn>
    </div>
  );
}
