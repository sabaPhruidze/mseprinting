import { useState, useEffect, useMemo } from "react";
import {
  GlobalContainerColumn,
  Globalh2TitleWithMB20,
  GlobalTextContainer,
  GlobalPart,
  GlobalMainTitle,
  FullBackgroundContainerZERO, // Updated styled component for the background
  TitleAndButtonContainer, // Styled component for title and button wrapping
  FullScreenTitle, // Styled component for the main title in the background
  FullScreenButton, // Styled component for the Request a Quote button
} from "../style/GlobalStyle";
import { fetchOnlinePortalData } from "../data/sub-category data/AllSubCategoryData";
import { CommonDocument } from "../types/DataTypes";
import ImageWithSEO from "../importantparts/ImageWithCEO"; // Import ImageWithSEO for handling the image
import { ONLINE_ORDERING_IMAGE } from "../data/sub-category data/ImageWithCEOData"; // Import the ONLINE_ORDERING_IMAGE

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
      {/* Full-screen section with background image using ImageWithSEO */}
      <FullBackgroundContainerZERO>
        <ImageWithSEO
          src={ONLINE_ORDERING_IMAGE.src} // Use ONLINE_ORDERING_IMAGE for the image source
          alt={ONLINE_ORDERING_IMAGE.alt}
          title={ONLINE_ORDERING_IMAGE.title}
          geoData={ONLINE_ORDERING_IMAGE.geoData}
          loading="eager"
        />
        <TitleAndButtonContainer>
          <FullScreenTitle>{memoizedData?.one.title}</FullScreenTitle>
          <FullScreenButton>Request a Quote</FullScreenButton>
        </TitleAndButtonContainer>
      </FullBackgroundContainerZERO>

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
