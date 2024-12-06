import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  GlobalContainerColumn,
  GlobalTextContainer,
  GlobalPart,
  FullBackgroundContainerZERO,
  TitleAndButtonContainer,
  FullScreenTitle,
  FullScreenButton,
  GlobalMainContent,
} from "../../style/GlobalStyle";
import { fetchBannersPostersData } from "../../data/sub-category data/AllSubCategoryData";
import { CommonDocumentWAS } from "../../types/DataTypes";
import ImageWithSEO from "../../importantparts/ImageWithCEO";
import { BANNERS_POSTERS_IMAGE } from "../../data/sub-category data/ImageWithCEOData";
import HelmetComponent from "../../importantparts/Helmet";
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
  const navigate = useNavigate();

  return (
    <div>
      {/* HelmetComponent for SEO */}
      <HelmetComponent
        title="Banners & Posters | MSE Printing"
        description="Explore our high-quality banners and posters that make a lasting impact. Order your custom banners and posters today at MSE Printing."
        canonical="https://www.mseprinting.com/banners-posters"
      />

      {/* Full-screen section with background image using ImageWithSEO */}
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div> {/* Add this overlay div */}
        <ImageWithSEO
          src={BANNERS_POSTERS_IMAGE.src} // Use BANNERS_POSTERS_IMAGE for the image source
          alt={BANNERS_POSTERS_IMAGE.alt}
          title={BANNERS_POSTERS_IMAGE.title}
          geoData={BANNERS_POSTERS_IMAGE.geoData}
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
