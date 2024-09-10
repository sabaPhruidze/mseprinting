import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import {
  GlobalContainerColumn,
  GlobalPart,
  GlobalRow,
  AlignedTextContainer, // Import the styled component for text alignment
  FullBackgroundContainer, // Styled component for the full background
  TitleAndButtonContainer, // Styled component for title and button wrapping
  FullScreenTitle, // Styled component for the main title in the background
  FullScreenButton, // Styled component for the "Request a Quote" button
} from "../../style/GlobalStyle";
import { fetchBusinessFormsData } from "../../data/sub-category data/AllSubCategoryData";
import { BusinessFormsType } from "../../types/DataTypes";

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
      {/* Full-screen section with background image */}
      <FullBackgroundContainer bgimage={memoizedData?.fourth || ""}>
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
