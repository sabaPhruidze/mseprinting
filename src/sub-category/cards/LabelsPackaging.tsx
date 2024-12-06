import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  GlobalContainerColumn,
  GlobalPart,
  Globalh2TitleWithMB20,
  GlobalTextContainer,
  FullBackgroundContainerZERO,
  TitleAndButtonContainer,
  FullScreenTitle,
  FullScreenButton,
  GlobalMainContent,
} from "../../style/GlobalStyle";
import { fetchLabelsPackagingData } from "../../data/sub-category data/AllSubCategoryData";
import { LabelsPackagingDocument } from "../../types/DataTypes";
import ImageWithSEO from "../../importantparts/ImageWithCEO";
import { LABELS_PACKAGING_IMAGE_PAGE } from "../../data/sub-category data/ImageWithCEOData";
import HelmetComponent from "../../importantparts/Helmet"; // Import HelmetComponent for SEO

export default function LabelsPackaging() {
  const [labelsPackagingData, setLabelsPackagingData] =
    useState<LabelsPackagingDocument | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getLabelsPackagingData = async () => {
      const data: LabelsPackagingDocument | null =
        await fetchLabelsPackagingData();
      if (data) {
        setLabelsPackagingData(data);
      }
    };

    getLabelsPackagingData();
  }, []);

  const memoizedData = useMemo(
    () => labelsPackagingData,
    [labelsPackagingData]
  );

  return (
    <div>
      {/* HelmetComponent for SEO */}
      <HelmetComponent
        title="Labels & Packaging | MSE Printing"
        description="Explore our high-quality labels and packaging options tailored to your brand. Order custom labels and packaging at MSE Printing."
        canonical="https://www.mseprinting.com/labels-packaging"
      />

      {/* Full-screen section with background image using ImageWithSEO */}
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div>
        <ImageWithSEO
          src={LABELS_PACKAGING_IMAGE_PAGE.src}
          alt={LABELS_PACKAGING_IMAGE_PAGE.alt}
          title={LABELS_PACKAGING_IMAGE_PAGE.title}
          geoData={LABELS_PACKAGING_IMAGE_PAGE.geoData}
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
            <div key={index}>
              <Globalh2TitleWithMB20>{item.title}</Globalh2TitleWithMB20>
              <GlobalPart>{item.content}</GlobalPart>
            </div>
          ))}

          <GlobalPart>{memoizedData?.three.content}</GlobalPart>
        </GlobalTextContainer>
      </GlobalContainerColumn>
    </div>
  );
}
