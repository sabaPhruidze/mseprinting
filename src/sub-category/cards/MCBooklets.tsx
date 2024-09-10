import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import {
  GlobalContainerColumn,
  GlobalPart,
  GlobalTextContainer, // Import the styled component for text wrapping
  FullBackgroundContainer, // Styled component for the full background
  TitleAndButtonContainer, // Styled component for title and button wrapping
  FullScreenTitle, // Styled component for the main title in the background
  FullScreenButton, // Styled component for the "Request a Quote" button
} from "../../style/GlobalStyle";
import { fetchMKBookletsData } from "../../data/sub-category data/AllSubCategoryData";
import { CommonDocumentWAS } from "../../types/DataTypes";

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
      {/* Full-screen section with background image */}
      <FullBackgroundContainer bgimage={memoizedData?.three || ""}>
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
