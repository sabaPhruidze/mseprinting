import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import {
  GlobalContainerColumn,
  GlobalPart,
  GlobalRow,
  AlignedTextContainer,
  FullBackgroundContainerZERO,
  TitleAndButtonContainer,
  FullScreenTitle,
  FullScreenButton,
  GlobalMainContent,
  FloatedImageContainer,
} from "../../style/GlobalStyle";
import { fetchBusinessFormsData } from "../../data/sub-category data/AllSubCategoryData";
import { BusinessFormsType } from "../../types/DataTypes";
import ImageWithSEO from "../../importantparts/ImageWithCEO";
import {
  BUSINESS_FORM_IMAGE,
  BUSINESS_FORMS_RIGHT_IMAGE,
} from "../../data/sub-category data/ImageWithCEOData";
import HelmetComponent from "../../importantparts/Helmet"; // Import HelmetComponent for SEO

// Styled component to float the image within the text container

export default function BusinessForms() {
  const [businessFormsData, setBusinessFormsData] =
    useState<BusinessFormsType | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getBusinessFormsData = async () => {
      const data: BusinessFormsType | null = await fetchBusinessFormsData();
      if (data) {
        setBusinessFormsData(data);
      }
    };

    getBusinessFormsData();
  }, []);

  const memoizedData = useMemo(() => businessFormsData, [businessFormsData]);

  return (
    <div>
      {/* HelmetComponent for SEO */}
      <HelmetComponent
        title="Business Forms | MSE Printing"
        description="Discover our customized business forms to streamline your operations. Order professional forms for your business at MSE Printing."
      />

      {/* Full-screen background section */}
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div>
        <ImageWithSEO
          src={BUSINESS_FORM_IMAGE.src}
          alt={BUSINESS_FORM_IMAGE.alt}
          title={BUSINESS_FORM_IMAGE.title}
          geoData={BUSINESS_FORM_IMAGE.geoData}
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
        <AlignedTextContainer>
          {/* Floated image on the right */}
          <FloatedImageContainer>
            <ImageWithSEO
              src={BUSINESS_FORMS_RIGHT_IMAGE.src}
              alt={BUSINESS_FORMS_RIGHT_IMAGE.alt}
              title={BUSINESS_FORMS_RIGHT_IMAGE.title}
              geoData={BUSINESS_FORMS_RIGHT_IMAGE.geoData}
              loading="lazy"
            />
          </FloatedImageContainer>

          {/* The text will wrap around the above floated image */}
          {memoizedData?.two.map((item, index) => (
            <GlobalPart key={index}>{item}</GlobalPart>
          ))}

          <GlobalPart>{memoizedData?.three.firstPart}</GlobalPart>

          {memoizedData?.three.circle.map((item, index) => (
            <GlobalRow key={index}>{item}</GlobalRow>
          ))}

          <GlobalPart>{memoizedData?.three.secondPart}</GlobalPart>
        </AlignedTextContainer>
      </GlobalContainerColumn>
    </div>
  );
}
