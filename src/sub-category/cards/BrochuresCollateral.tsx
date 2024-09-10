import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  GlobalContainerColumn,
  GlobalPart,
  GlobalTextContainer, // Import the styled component for text wrapping
  FullBackgroundContainer, // Styled component for the full background
  TitleAndButtonContainer, // Styled component for title and button wrapping
  FullScreenTitle, // Styled component for the main title in the background
  FullScreenButton, // Styled component for the "Request a Quote" button
} from "../../style/GlobalStyle";
import { fetchBrochuresCollateralData } from "../../data/sub-category data/AllSubCategoryData";
import { CommonDocumentWAS } from "../../types/DataTypes";

export default function BrochuresCollateral() {
  const [brochuresCollateralData, setBrochuresCollateralData] =
    useState<CommonDocumentWAS | null>(null);

  useEffect(() => {
    const getBrochuresCollateralData = async () => {
      const data = await fetchBrochuresCollateralData();
      if (data) {
        setBrochuresCollateralData(data);
      }
    };

    getBrochuresCollateralData();
  }, []);

  const memoizedData = useMemo(
    () => brochuresCollateralData,
    [brochuresCollateralData]
  );
  const navigate = useNavigate();
  return (
    <div>
      {/* Full-screen section with background image */}
      <FullBackgroundContainer bgimage={memoizedData?.three || ""}>
        <TitleAndButtonContainer>
          <FullScreenTitle>{memoizedData?.one.title}</FullScreenTitle>
          <FullScreenButton onClick={() => navigate("/request-quote")}>
            Request a Quote
          </FullScreenButton>
        </TitleAndButtonContainer>
      </FullBackgroundContainer>

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
