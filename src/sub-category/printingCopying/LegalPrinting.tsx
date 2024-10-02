import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
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
import { fetchLegalCopyingData } from "../../data/sub-category data/AllSubCategoryData"; // Use the correct data fetching function
import { CommonDocumentWAS } from "../../types/DataTypes";
import ImageWithSEO from "../../importantparts/ImageWithCEO"; // Import ImageWithSEO for handling the image
import { LEGAL_COPYING_IMAGE } from "../../data/sub-category data/ImageWithCEOData"; // Import the correct image data

export default function LegalPrinting() {
  const [legalCopyingData, setLegalCopyingData] =
    useState<CommonDocumentWAS | null>(null);

  useEffect(() => {
    const getLegalCopyingData = async () => {
      const data = await fetchLegalCopyingData();
      if (data) {
        setLegalCopyingData(data);
      }
    };

    getLegalCopyingData();
  }, []);

  const memoizedData = useMemo(() => legalCopyingData, [legalCopyingData]);
  const navigate = useNavigate();

  return (
    <div>
      {/* Full-screen section with background image using ImageWithSEO */}
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div> {/* Add this overlay div */}
        <ImageWithSEO
          src={LEGAL_COPYING_IMAGE.src} // Use LEGAL_COPYING_IMAGE for the image source
          alt={LEGAL_COPYING_IMAGE.alt}
          title={LEGAL_COPYING_IMAGE.title}
          geoData={LEGAL_COPYING_IMAGE.geoData}
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
        <GlobalTextContainer>
          {memoizedData?.two.map((item, index) => (
            <GlobalPart key={index}>{item}</GlobalPart>
          ))}
        </GlobalTextContainer>
      </GlobalContainerColumn>
    </div>
  );
}
