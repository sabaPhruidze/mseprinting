import { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HelmetComponent from "../importantparts/Helmet"; // Import HelmetComponent for SEO
import {
  GlobalContainerColumn,
  Globalh2TitleWithMB20,
  GlobalPart,
  GlobalPartBox,
  GlobalMainTitle,
  GlobalListItem,
  GlobalList,
  GlobalOrderedList,
  GlobalOrderedListItem,
  GlobalNestedList,
  GlobalNestedListItem,
  GlobalSpecialPartDark,
  GlobalTextContainer,
  TitleAndButtonContainer,
  FullBackgroundContainerZERO,
  FullScreenTitle,
  FullScreenButton,
  GlobalMainContent,
  FloatedImageContainer, // For the right-side image
} from "../style/GlobalStyle"; // Import new and existing styles
import {
  DIGITAL_PRINTING_IMAGE,
  DIGITAL_PRINTING_RIGHT_IMAGE,
} from "../data/sub-category data/ImageWithCEOData"; // Import main and right-side images
import { fetchDigitalPrintingData } from "../data/sub-category data/AllSubCategoryData";
import { DigitalPrintingDocument } from "../types/DataTypes";
import ImageWithCEO from "../importantparts/ImageWithCEO"; // Import ImageWithCEO component

export default function CommercialDigitalPrinting() {
  const [digitalPrintingData, setDigitalPrintingData] =
    useState<DigitalPrintingDocument | null>(null);

  useEffect(() => {
    const getDigitalPrintingData = async () => {
      const data = await fetchDigitalPrintingData();
      if (data) {
        setDigitalPrintingData(data);
      }
    };

    getDigitalPrintingData();
  }, []);

  const memoizedData = useMemo(
    () => digitalPrintingData,
    [digitalPrintingData]
  );
  const navigate = useNavigate();

  const renderSpecialPart = useCallback((item: any) => {
    return (
      <>
        {item.specialOne && (
          <GlobalNestedListItem key={`specialOne-${item.specialOne}`}>
            <GlobalSpecialPartDark>{item.specialOne} </GlobalSpecialPartDark>
            <GlobalPartBox>{item.contentOne}</GlobalPartBox>
          </GlobalNestedListItem>
        )}
        {item.specialTwo && (
          <GlobalNestedListItem key={`specialTwo-${item.specialTwo}`}>
            <GlobalSpecialPartDark>{item.specialTwo} </GlobalSpecialPartDark>
            <GlobalPartBox>{item.contentTwo}</GlobalPartBox>
          </GlobalNestedListItem>
        )}
      </>
    );
  }, []);

  return (
    <div>
      {/* HelmetComponent for SEO */}
      <HelmetComponent
        title="Commercial Digital Printing | MSE Printing"
        description="Discover MSE Printing's professional digital printing services, tailored to meet your commercial needs with high-quality and precision."
      />

      {/* Full Background Image Container */}
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div> {/* Add this overlay div */}
        <ImageWithCEO
          src={DIGITAL_PRINTING_IMAGE.src} // Using DIGITAL_PRINTING_IMAGE
          alt={DIGITAL_PRINTING_IMAGE.alt}
          title={DIGITAL_PRINTING_IMAGE.title}
          geoData={DIGITAL_PRINTING_IMAGE.geoData}
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
          {DIGITAL_PRINTING_RIGHT_IMAGE && (
            <FloatedImageContainer>
              <ImageWithCEO
                src={DIGITAL_PRINTING_RIGHT_IMAGE.src}
                alt={DIGITAL_PRINTING_RIGHT_IMAGE.alt}
                title={DIGITAL_PRINTING_RIGHT_IMAGE.title}
                geoData={DIGITAL_PRINTING_RIGHT_IMAGE.geoData}
                loading="eager"
              />
            </FloatedImageContainer>
          )}

          <GlobalMainTitle style={{ fontWeight: 800 }}>
            {memoizedData?.one.title}
          </GlobalMainTitle>
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
          <GlobalOrderedList>
            {memoizedData?.threeSub.map((item, index) => (
              <GlobalOrderedListItem key={index}>
                {item.title}
                <GlobalNestedList>{renderSpecialPart(item)}</GlobalNestedList>
              </GlobalOrderedListItem>
            ))}
          </GlobalOrderedList>

          <Globalh2TitleWithMB20>
            {memoizedData?.four.title}
          </Globalh2TitleWithMB20>
          <GlobalOrderedList>
            {memoizedData?.fourSub.map((item, index) => (
              <GlobalOrderedListItem key={index}>
                {item.title && <strong>{item.title}</strong>}
                <GlobalPartBox>{item.content}</GlobalPartBox>
              </GlobalOrderedListItem>
            ))}
          </GlobalOrderedList>

          <Globalh2TitleWithMB20>
            {memoizedData?.five.title}
          </Globalh2TitleWithMB20>
          <GlobalList>
            {memoizedData?.fiveSub.map((item, index) => (
              <GlobalListItem key={index}>
                {item.title && <strong>{item.title}</strong>}
                <GlobalPartBox>{item.content}</GlobalPartBox>
              </GlobalListItem>
            ))}
          </GlobalList>

          <Globalh2TitleWithMB20>
            {memoizedData?.six.title}
          </Globalh2TitleWithMB20>
          <GlobalOrderedList>
            {memoizedData?.sixSub.map((item, index) => (
              <GlobalOrderedListItem key={index}>
                <GlobalPartBox>{item.content}</GlobalPartBox>
              </GlobalOrderedListItem>
            ))}
          </GlobalOrderedList>

          <Globalh2TitleWithMB20>
            {memoizedData?.seven.title}
          </Globalh2TitleWithMB20>
          <GlobalList>
            {memoizedData?.sevenSub.map((item, index) => (
              <GlobalListItem key={index}>
                <GlobalPartBox>{item.content}</GlobalPartBox>
              </GlobalListItem>
            ))}
          </GlobalList>

          <Globalh2TitleWithMB20>
            {memoizedData?.eight.title}
          </Globalh2TitleWithMB20>
          <GlobalOrderedList>
            {memoizedData?.eightSub.map((item, index) => (
              <GlobalOrderedListItem key={index}>
                <GlobalPartBox>{item.content}</GlobalPartBox>
              </GlobalOrderedListItem>
            ))}
          </GlobalOrderedList>

          <Globalh2TitleWithMB20>
            {memoizedData?.nine.title}
          </Globalh2TitleWithMB20>
          <GlobalPart>{memoizedData?.nine.firstPart}</GlobalPart>
          <GlobalPart>{memoizedData?.nine.secondPart}</GlobalPart>
        </GlobalTextContainer>
      </GlobalContainerColumn>
    </div>
  );
}
