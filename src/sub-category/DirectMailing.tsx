import { useState, useEffect, useMemo } from "react";
import {
  GlobalContainerColumn,
  GlobalMainTitle,
  GlobalImageWrapperWithFloat,
  GlobalTextContainer,
  GlobalPart,
  Globalh2TitleWithMB20,
  FullBackgroundContainer, // New styled component for the background
  TitleAndButtonContainer, // Styled component for title and button wrapping
  FullScreenTitle, // Styled component for the main title in the background
  FullScreenButton, // Styled component for the Request a Quote button
} from "../style/GlobalStyle";
import { fetchDirectMailingData } from "../data/sub-category data/AllSubCategoryData";
import { CommonDocument } from "../types/DataTypes";

export default function DirectMailing() {
  const [directMailingData, setDirectMailingData] =
    useState<CommonDocument | null>(null);

  useEffect(() => {
    const getDirectMailingData = async () => {
      const data = await fetchDirectMailingData();
      if (data) {
        setDirectMailingData(data);
      }
    };

    getDirectMailingData();
  }, []);

  const memoizedData = useMemo(() => directMailingData, [directMailingData]);

  return (
    <div>
      {/* Full-screen section with background image */}
      <FullBackgroundContainer bgimage={memoizedData?.third || ""}>
        <TitleAndButtonContainer>
          <FullScreenTitle>{memoizedData?.one.title}</FullScreenTitle>
          <FullScreenButton>Request a Quote</FullScreenButton>
        </TitleAndButtonContainer>
      </FullBackgroundContainer>

      {/* Text content below the background image */}
      <GlobalContainerColumn>
        <GlobalTextContainer>
          {/* Loop through the second part of the data to render titles and content */}
          {memoizedData?.two.map((item, index) => (
            <div key={index}>
              <Globalh2TitleWithMB20>{item.title}</Globalh2TitleWithMB20>
              {item.content && <GlobalPart>{item.content}</GlobalPart>}
            </div>
          ))}
        </GlobalTextContainer>
      </GlobalContainerColumn>
    </div>
  );
}
