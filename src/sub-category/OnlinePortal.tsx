import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  GlobalContainerColumn,
  Globalh2TitleWithMB20,
  GlobalTextContainer,
  GlobalPart,
  GlobalMainTitle,
  FullBackgroundContainerZERO,
  TitleAndButtonContainer,
  FullScreenTitle,
  FullScreenButton,
  GlobalMainContent,
  FloatedImageContainer, // <-- Make sure to import this so you can float your second image
} from "../style/GlobalStyle";
import { fetchOnlinePortalData } from "../data/sub-category data/AllSubCategoryData";
import { CommonDocument } from "../types/DataTypes";
import ImageWithSEO from "../importantparts/ImageWithCEO";
import HelmetComponent from "../importantparts/Helmet"; // Import HelmetComponent for SEO

// Import both the main and right-side images
import {
  ONLINE_ORDERING_IMAGE,
  ONLINE_ORDERING_RIGHT_IMAGE, // <-- Import the right-side image
} from "../data/sub-category data/ImageWithCEOData";

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
  const navigate = useNavigate();

  return (
    <div>
      {/* HelmetComponent for SEO */}
      <HelmetComponent
        title="Online Ordering Portal | MSE Printing"
        description="Access MSE Printing's online ordering portal to easily manage and order high-quality printing solutions tailored to your needs."
      />

      {/* Full-screen section with background image using ImageWithSEO */}
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div>
        <ImageWithSEO
          src={ONLINE_ORDERING_IMAGE.src}
          alt={ONLINE_ORDERING_IMAGE.alt}
          title={ONLINE_ORDERING_IMAGE.title}
          geoData={ONLINE_ORDERING_IMAGE.geoData}
          loading="eager"
        />
        <TitleAndButtonContainer>
          <FullScreenTitle>{memoizedData?.front?.title}</FullScreenTitle>
          <GlobalMainContent>{memoizedData?.front?.content}</GlobalMainContent>
          <FullScreenButton onClick={() => navigate("/request-quote")}>
            {memoizedData?.front?.button}
          </FullScreenButton>
        </TitleAndButtonContainer>
      </FullBackgroundContainerZERO>

      {/* Text content below the background image */}
      <GlobalContainerColumn>
        <GlobalTextContainer>
          {/* Floated (second) image on the right side */}
          <FloatedImageContainer>
            <ImageWithSEO
              src={ONLINE_ORDERING_RIGHT_IMAGE.src}
              alt={ONLINE_ORDERING_RIGHT_IMAGE.alt}
              title={ONLINE_ORDERING_RIGHT_IMAGE.title}
              geoData={ONLINE_ORDERING_RIGHT_IMAGE.geoData}
              loading="eager"
            />
          </FloatedImageContainer>

          <GlobalMainTitle>{memoizedData?.one?.title}</GlobalMainTitle>
          {memoizedData?.two?.map((item, index) => (
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
