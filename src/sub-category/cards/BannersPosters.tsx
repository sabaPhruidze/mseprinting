import { useState, useEffect, useMemo } from "react";
import {
  GlobalContainerColumn,
  GlobalTextContainer,
  GlobalPart,
  FullBackgroundContainer, // Styled component for the full background
  TitleAndButtonContainer, // Styled component for title and button wrapping
  FullScreenTitle, // Styled component for the main title in the background
  FullScreenButton, // Styled component for the "Request a Quote" button
} from "../../style/GlobalStyle";
import { fetchBannersPostersData } from "../../data/sub-category data/AllSubCategoryData";
import { CommonDocumentWAS } from "../../types/DataTypes";

export default function BannersPosters() {
  const [bannersPostersData, setBannersPostersData] =
    useState<CommonDocumentWAS | null>(null);

  useEffect(() => {
    const getBannersPostersData = async () => {
      const data = await fetchBannersPostersData();
      if (data) {
        setBannersPostersData(data);
      }
    };

    getBannersPostersData();
  }, []);

  const memoizedData = useMemo(() => bannersPostersData, [bannersPostersData]);

  return (
    <div>
      {/* Full-screen section with background image */}
      <FullBackgroundContainer bgimage={memoizedData?.three || ""}>
        <TitleAndButtonContainer>
          <FullScreenTitle>{memoizedData?.one.title}</FullScreenTitle>
          <FullScreenButton>Request a Quote</FullScreenButton>
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
