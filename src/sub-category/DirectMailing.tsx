import { useState, useEffect, useMemo } from "react";
import {
  GlobalContainerColumn,
  GlobalTextContainer,
  GlobalPart,
  Globalh2TitleWithMB20,
  FullBackgroundContainerZERO, // Updated styled component for the background
  TitleAndButtonContainer, // Styled component for title and button wrapping
  FullScreenTitle, // Styled component for the main title in the background
  FullScreenButton, // Styled component for the Request a Quote button
  GlobalMainContent,
} from "../style/GlobalStyle";
import { fetchDirectMailingData } from "../data/sub-category data/AllSubCategoryData";
import { CommonDocument } from "../types/DataTypes";
import ImageWithSEO from "../importantparts/ImageWithCEO"; // Import ImageWithSEO for handling the image
import { DIRECT_MAIL_IMAGE } from "../data/sub-category data/ImageWithCEOData"; // Import the DIRECT_MAIL_IMAGE

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
      {/* Full-screen section with background image using ImageWithSEO */}
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div> {/* Add this overlay div */}
        <ImageWithSEO
          src={DIRECT_MAIL_IMAGE.src} // Use DIRECT_MAIL_IMAGE for the image source
          alt={DIRECT_MAIL_IMAGE.alt}
          title={DIRECT_MAIL_IMAGE.title}
          geoData={DIRECT_MAIL_IMAGE.geoData}
          loading="eager"
        />
        <TitleAndButtonContainer>
          <FullScreenTitle>{memoizedData?.front?.title}</FullScreenTitle>
          <GlobalMainContent>{memoizedData?.front?.content}</GlobalMainContent>
          <FullScreenButton>{memoizedData?.front?.button}</FullScreenButton>
        </TitleAndButtonContainer>
      </FullBackgroundContainerZERO>

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
