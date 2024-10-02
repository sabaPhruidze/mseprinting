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
import { fetchPosterPrintingData } from "../../data/sub-category data/AllSubCategoryData"; // Use the correct data fetching function
import { CommonDocumentWAS } from "../../types/DataTypes";
import ImageWithSEO from "../../importantparts/ImageWithCEO"; // Import ImageWithSEO for handling the image
import { POSTER_PRINTING_IMAGE } from "../../data/sub-category data/ImageWithCEOData"; // Import the correct image data

export default function PosterPrinting() {
  const [posterPrintingData, setPosterPrintingData] =
    useState<CommonDocumentWAS | null>(null);

  useEffect(() => {
    const getPosterPrintingData = async () => {
      const data = await fetchPosterPrintingData();
      if (data) {
        setPosterPrintingData(data);
      }
    };

    getPosterPrintingData();
  }, []);

  const memoizedData = useMemo(() => posterPrintingData, [posterPrintingData]);
  const navigate = useNavigate();

  return (
    <div>
      {/* Full-screen section with background image using ImageWithSEO */}
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div> {/* Add this overlay div */}
        <ImageWithSEO
          src={POSTER_PRINTING_IMAGE.src} // Use POSTER_PRINTING_IMAGE for the image source
          alt={POSTER_PRINTING_IMAGE.alt}
          title={POSTER_PRINTING_IMAGE.title}
          geoData={POSTER_PRINTING_IMAGE.geoData}
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
