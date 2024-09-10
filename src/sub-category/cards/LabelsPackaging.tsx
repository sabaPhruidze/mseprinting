import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import {
  GlobalContainerColumn,
  GlobalPart,
  Globalh2TitleWithMB20,
  GlobalTextContainer, // Import the styled component for text wrapping
  FullBackgroundContainerZERO, // Updated styled component for the full background
  TitleAndButtonContainer, // Styled component for title and button wrapping
  FullScreenTitle, // Styled component for the main title in the background
  FullScreenButton, // Styled component for the "Request a Quote" button
} from "../../style/GlobalStyle";
import { fetchLabelsPackagingData } from "../../data/sub-category data/AllSubCategoryData";
import { LabelsPackagingDocument } from "../../types/DataTypes";
import ImageWithSEO from "../../importantparts/ImageWithCEO"; // Import ImageWithSEO for handling the image
import { LABELS_PACKAGING_IMAGE } from "../../data/sub-category data/ImageWithCEOData"; // Import the LABELS_PACKAGING_IMAGE

export default function LabelsPackaging() {
  const [labelsPackagingData, setLabelsPackagingData] =
    useState<LabelsPackagingDocument | null>(null);

  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const getLabelsPackagingData = async () => {
      const data: LabelsPackagingDocument | null =
        await fetchLabelsPackagingData();
      if (data) {
        setLabelsPackagingData(data);
      }
    };

    getLabelsPackagingData();
  }, []);

  const memoizedData = useMemo(
    () => labelsPackagingData,
    [labelsPackagingData]
  );

  return (
    <div>
      {/* Full-screen section with background image using ImageWithSEO */}
      <FullBackgroundContainerZERO>
        <ImageWithSEO
          src={LABELS_PACKAGING_IMAGE.src} // Use LABELS_PACKAGING_IMAGE for the image source
          alt={LABELS_PACKAGING_IMAGE.alt}
          title={LABELS_PACKAGING_IMAGE.title}
          geoData={LABELS_PACKAGING_IMAGE.geoData}
          loading="eager"
        />
        <TitleAndButtonContainer>
          <FullScreenTitle>{memoizedData?.one.title}</FullScreenTitle>
          {/* Add onClick event for navigation */}
          <FullScreenButton onClick={() => navigate("/request-quote")}>
            Request a Quote
          </FullScreenButton>
        </TitleAndButtonContainer>
      </FullBackgroundContainerZERO>

      {/* Text content below the background image */}
      <GlobalContainerColumn>
        <GlobalTextContainer>
          {/* Loop through and display content */}
          {memoizedData?.two.map((item, index) => (
            <div key={index}>
              <Globalh2TitleWithMB20>{item.title}</Globalh2TitleWithMB20>
              <GlobalPart>{item.content}</GlobalPart>
            </div>
          ))}

          <GlobalPart>{memoizedData?.three.content}</GlobalPart>
        </GlobalTextContainer>
      </GlobalContainerColumn>
    </div>
  );
}
