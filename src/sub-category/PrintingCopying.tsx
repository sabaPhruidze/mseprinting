import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import HelmetComponent from "../importantparts/Helmet"; // Import HelmetComponent for SEO
import {
  GlobalContainerColumn,
  Globalh2TitleWithMB20,
  GlobalPart,
  GlobalTextContainer, // Styled component for text wrapping
  FullBackgroundContainerZERO, // Updated styled component for the full background
  TitleAndButtonContainer, // Styled component for title and button wrapping
  FullScreenTitle, // Styled component for the main title in the background
  FullScreenButton, // Styled component for the "Request a Quote" button
  GlobalMainContent,
  FloatedImageContainer, // For the right-side image
} from "../style/GlobalStyle";
import { fetchCopyPrintingData } from "../data/sub-category data/AllSubCategoryData";
import { PrintingCopyingDocument } from "../types/DataTypes";
import ImageWithSEO from "../importantparts/ImageWithCEO"; // Import ImageWithSEO for handling the image
import {
  PRINTING_COPYING_IMAGE,
  PRINTING_COPYING_RIGHT_IMAGE, // Import right-side image
} from "../data/sub-category data/ImageWithCEOData";

export default function PrintingCopying() {
  const [printingCopyingData, setPrintingCopyingData] =
    useState<PrintingCopyingDocument | null>(null);

  useEffect(() => {
    const getPrintingCopyingData = async () => {
      const data = await fetchCopyPrintingData();
      if (data) {
        setPrintingCopyingData(data);
      }
    };

    getPrintingCopyingData();
  }, []);

  const navigate = useNavigate();
  const memoizedData = useMemo(
    () => printingCopyingData,
    [printingCopyingData]
  );

  return (
    <div>
      {/* HelmetComponent for SEO */}
      <HelmetComponent
        title="Printing & Copying Services | MSE Printing"
        description="Explore MSE Printing’s professional printing and copying services. High-quality solutions for business cards, brochures, and more."
      />

      {/* Full-screen section with background image using ImageWithSEO */}
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div> {/* Add this overlay div */}
        <ImageWithSEO
          src={PRINTING_COPYING_IMAGE.src} // Use PRINTING_COPYING_IMAGE for the image source
          alt={PRINTING_COPYING_IMAGE.alt}
          title={PRINTING_COPYING_IMAGE.title}
          geoData={PRINTING_COPYING_IMAGE.geoData}
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
          {PRINTING_COPYING_RIGHT_IMAGE && (
            <FloatedImageContainer>
              <ImageWithSEO
                src={PRINTING_COPYING_RIGHT_IMAGE.src}
                alt={PRINTING_COPYING_RIGHT_IMAGE.alt}
                title={PRINTING_COPYING_RIGHT_IMAGE.title}
                geoData={PRINTING_COPYING_RIGHT_IMAGE.geoData}
                loading="eager"
              />
            </FloatedImageContainer>
          )}

          <GlobalPart>{memoizedData?.one.content}</GlobalPart>

          {memoizedData?.two.map((item, index) => (
            <div key={index}>
              <Globalh2TitleWithMB20>{item.title}</Globalh2TitleWithMB20>
              <GlobalPart>{item.content}</GlobalPart>
            </div>
          ))}

          <Globalh2TitleWithMB20>
            {memoizedData?.three.title}
          </Globalh2TitleWithMB20>
          <GlobalPart>{memoizedData?.three.firstPart}</GlobalPart>
          <GlobalPart>{memoizedData?.three.secondPart}</GlobalPart>
        </GlobalTextContainer>
      </GlobalContainerColumn>
    </div>
  );
}
