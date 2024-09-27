import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  GlobalContainerColumn,
  GlobalPart,
  GlobalTextContainer,
  FullBackgroundContainerZERO,
  TitleAndButtonContainer,
  FullScreenTitle,
  FullScreenButton,
  GlobalMainContent,
} from "../../style/GlobalStyle";
import { fetchBusinessCardsStationeryData } from "../../data/sub-category data/AllSubCategoryData"; // Use the correct data fetching function
import { CommonDocumentWAS } from "../../types/DataTypes";
import ImageWithSEO from "../../importantparts/ImageWithCEO"; // Import ImageWithSEO for handling the image
import { BUSINESS_CARDS_STATIONERY_IMAGE } from "../../data/sub-category data/ImageWithCEOData"; // Import the correct image data

export default function BusinessCardsStationery() {
  const [businessCardsStationeryData, setBusinessCardsStationeryData] =
    useState<CommonDocumentWAS | null>(null);

  useEffect(() => {
    const getBusinessCardsStationeryData = async () => {
      const data = await fetchBusinessCardsStationeryData();
      if (data) {
        setBusinessCardsStationeryData(data);
      }
    };

    getBusinessCardsStationeryData();
  }, []);

  const memoizedData = useMemo(
    () => businessCardsStationeryData,
    [businessCardsStationeryData]
  );
  const navigate = useNavigate();

  return (
    <div>
      {/* Full-screen section with background image using ImageWithSEO */}
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div> {/* Add this overlay div */}
        <ImageWithSEO
          src={BUSINESS_CARDS_STATIONERY_IMAGE.src} // Use BUSINESS_CARDS_STATIONERY_IMAGE for the image source
          alt={BUSINESS_CARDS_STATIONERY_IMAGE.alt}
          title={BUSINESS_CARDS_STATIONERY_IMAGE.title}
          geoData={BUSINESS_CARDS_STATIONERY_IMAGE.geoData}
          loading="eager"
        />
        <TitleAndButtonContainer>
          <FullScreenTitle>{memoizedData?.front?.title}</FullScreenTitle>
          <GlobalMainContent>{memoizedData?.front?.content}</GlobalMainContent>
          <FullScreenButton
            onClick={() => {
              navigate("/request-quote");
            }}
          >
            {memoizedData?.front?.button}
          </FullScreenButton>
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
