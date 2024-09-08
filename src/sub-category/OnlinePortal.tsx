import { useState, useEffect, useMemo } from "react";
import {
  GlobalContainerColumn,
  Globalh2TitleWithMB20,
  GlobalImageWrapperWithFloat,
  GlobalTextContainer,
  GlobalPart,
  GlobalMainTitle,
  FullBackgroundContainer, // New styled component for the background
  TitleAndButtonContainer, // Styled component for title and button wrapping
  FullScreenTitle, // Styled component for the main title in the background
  FullScreenButton, // Styled component for the Request a Quote button
} from "../style/GlobalStyle";
import { fetchOnlinePortalData } from "../data/sub-category data/AllSubCategoryData";
import { CommonDocument } from "../types/DataTypes";

export default function OnlinePortal() {
  const [onlinePortalData, setOnlinePortalData] =
    useState<CommonDocument | null>(null);

  useEffect(() => {
    const getOnlinePortalData = async () => {
      const data = await fetchOnlinePortalData();
      if (data) {
        setOnlinePortalData(data);
      }
    };

    getOnlinePortalData();
  }, []);

  const memoizedData = useMemo(() => onlinePortalData, [onlinePortalData]);

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
          <GlobalMainTitle>{memoizedData?.one.title}</GlobalMainTitle>
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
