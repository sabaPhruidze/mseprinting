import { useState, useEffect, useMemo } from "react";
import {
  GlobalContainerColumn,
  GlobalTextContainer,
  GlobalPart,
  FullBackgroundContainerZERO, // Updated styled component for the full background
  TitleAndButtonContainer, // Styled component for title and button wrapping
  FullScreenTitle, // Styled component for the main title in the background
  FullScreenButton, // Styled component for the "Request a Quote" button
} from "../../style/GlobalStyle";
import { fetchBannersPostersData } from "../../data/sub-category data/AllSubCategoryData";
import { CommonDocumentWAS } from "../../types/DataTypes";
import ImageWithSEO from "../../importantparts/ImageWithCEO"; // Import ImageWithSEO for handling the image
import { BANNERS_POSTERS_IMAGE } from "../../data/sub-category data/ImageWithCEOData"; // Import the BANNERS_POSTERS_IMAGE

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
      {/* Full-screen section with background image using ImageWithSEO */}
      <FullBackgroundContainerZERO>
        <ImageWithSEO
          src={BANNERS_POSTERS_IMAGE.src} // Use BANNERS_POSTERS_IMAGE for the image source
          alt={BANNERS_POSTERS_IMAGE.alt}
          title={BANNERS_POSTERS_IMAGE.title}
          geoData={BANNERS_POSTERS_IMAGE.geoData}
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
          {memoizedData?.two.map((item, index) => (
            <GlobalPart key={index}>{item}</GlobalPart>
          ))}
        </GlobalTextContainer>
      </GlobalContainerColumn>
    </div>
  );
}
