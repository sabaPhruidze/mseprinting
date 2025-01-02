import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  GlobalContainerColumn,
  GlobalTextContainer,
  GlobalPart,
  Globalh2TitleWithMB20,
  FullBackgroundContainerZERO,
  TitleAndButtonContainer,
  FullScreenTitle,
  FullScreenButton,
  GlobalMainContent,
  FloatedImageContainer, // For the right-side image
} from "../style/GlobalStyle";
import { fetchDirectMailingData } from "../data/sub-category data/AllSubCategoryData";
import { CommonDocument } from "../types/DataTypes";
import ImageWithSEO from "../importantparts/ImageWithCEO";
import {
  DIRECT_MAILING_PAGE_IMAGE,
  DIRECT_MAIL_RIGHT_IMAGE,
} from "../data/sub-category data/ImageWithCEOData";
import HelmetComponent from "../importantparts/Helmet"; // Import HelmetComponent for SEO

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
  const navigate = useNavigate();

  return (
    <div>
      {/* HelmetComponent for SEO */}
      <HelmetComponent
        title="Direct Mailing Services | MSE Printing"
        description="Enhance your business reach with our Direct Mailing services. From concept to delivery, we provide professional solutions tailored to your needs."
      />

      {/* Full-screen section with background image */}
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div>
        <ImageWithSEO
          src={DIRECT_MAILING_PAGE_IMAGE.src}
          alt={DIRECT_MAILING_PAGE_IMAGE.alt}
          title={DIRECT_MAILING_PAGE_IMAGE.title}
          geoData={DIRECT_MAILING_PAGE_IMAGE.geoData}
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
          {/* Right-side image */}
          {DIRECT_MAIL_RIGHT_IMAGE && (
            <FloatedImageContainer>
              <ImageWithSEO
                src={DIRECT_MAIL_RIGHT_IMAGE.src}
                alt={DIRECT_MAIL_RIGHT_IMAGE.alt}
                title={DIRECT_MAIL_RIGHT_IMAGE.title}
                geoData={DIRECT_MAIL_RIGHT_IMAGE.geoData}
                loading="eager"
              />
            </FloatedImageContainer>
          )}

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
