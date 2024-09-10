import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import {
  GlobalContainerColumn,
  GlobalPart,
  Globalh2TitleWithMB20,
  GlobalTextContainer, // Import the styled component for text wrapping
  FullBackgroundContainer, // Styled component for the full background
  TitleAndButtonContainer, // Styled component for title and button wrapping
  FullScreenTitle, // Styled component for the main title in the background
  FullScreenButton, // Styled component for the "Request a Quote" button
} from "../../style/GlobalStyle";
import { fetchLabelsPackagingData } from "../../data/sub-category data/AllSubCategoryData";
import { LabelsPackagingDocument } from "../../types/DataTypes";

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
      {/* Full-screen section with background image */}
      <FullBackgroundContainer bgimage={memoizedData?.four || ""}>
        <TitleAndButtonContainer>
          <FullScreenTitle>{memoizedData?.one.title}</FullScreenTitle>
          {/* Add onClick event for navigation */}
          <FullScreenButton onClick={() => navigate("/request-quote")}>
            Request a Quote
          </FullScreenButton>
        </TitleAndButtonContainer>
      </FullBackgroundContainer>

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
