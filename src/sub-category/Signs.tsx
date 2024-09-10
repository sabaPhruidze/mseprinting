import { useState, useEffect, useMemo } from "react";
import {
  GlobalContainerColumn,
  Globalh2TitleWithMB20,
  GlobalPart,
  GlobalTextContainer, // Styled component for text wrapping
  FullBackgroundContainerZERO, // Updated styled component for the full background
  TitleAndButtonContainer, // Styled component for title and button wrapping
  FullScreenTitle, // Styled component for the main title in the background
  FullScreenButton, // Styled component for the "Request a Quote" button
} from "../style/GlobalStyle";
import { fetchSignsData } from "../data/sub-category data/AllSubCategoryData";
import { CommonDocument } from "../types/DataTypes";
import ImageWithSEO from "../importantparts/ImageWithCEO"; // Import ImageWithSEO for handling the image
import { SIGNS_IMAGE } from "../data/sub-category data/ImageWithCEOData"; // Import the SIGNS_IMAGE

export default function Signs() {
  const [signsData, setSignsData] = useState<CommonDocument | null>(null);

  useEffect(() => {
    const getSignsData = async () => {
      const data = await fetchSignsData();
      if (data) {
        setSignsData(data);
      }
    };

    getSignsData();
  }, []);

  const memoizedData = useMemo(() => signsData, [signsData]);

  return (
    <div>
      {/* Full-screen section with background image using ImageWithSEO */}
      <FullBackgroundContainerZERO>
        <ImageWithSEO
          src={SIGNS_IMAGE.src} // Use SIGNS_IMAGE for the image source
          alt={SIGNS_IMAGE.alt}
          title={SIGNS_IMAGE.title}
          geoData={SIGNS_IMAGE.geoData}
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
