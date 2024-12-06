import { useState, useEffect, useMemo, useCallback } from "react";
import { OFFSET_PRINTING_IMAGE } from "../data/sub-category data/ImageWithCEOData";
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
  GlobalTextContainer, // Import the styled component for text wrapping
  TitleAndButtonContainer,
  FullBackgroundContainerZERO,
  FullScreenTitle,
  FullScreenButton,
  GlobalMainContent,
} from "../style/GlobalStyle";
import { fetchOffsetPrintingData } from "../data/sub-category data/AllSubCategoryData";
import { OffsetPrintingDocument } from "../types/DataTypes";
import ImageWithCEO from "../importantparts/ImageWithCEO";

export default function CommercialOffsetPrinting() {
  const [offsetPrintingData, setOffsetPrintingData] =
    useState<OffsetPrintingDocument | null>(null);

  useEffect(() => {
    const getOffsetPrintingData = async () => {
      const data = await fetchOffsetPrintingData();
      if (data) {
        setOffsetPrintingData(data);
      }
    };

    getOffsetPrintingData();
  }, []);

  const memoizedData = useMemo(() => offsetPrintingData, [offsetPrintingData]);
  const navigate = useNavigate();

  const renderSpecialPart = useCallback((item: any) => {
    return (
      <>
        {item.specialOne && (
          <GlobalNestedListItem key={`specialOne-${item.specialOne}`}>
            <GlobalSpecialPartDark>{item.specialOne} </GlobalSpecialPartDark>
            <GlobalPartBox> {item.contentOne}</GlobalPartBox>
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
        title="Commercial Offset Printing | MSE Printing"
        description="Explore high-quality commercial offset printing solutions by MSE Printing. We specialize in custom print projects that meet the highest industry standards."
        canonical="https://www.mseprinting.com/commercial-offset-printing"
      />

      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div> {/* Add this overlay div */}
        <ImageWithCEO
          src={OFFSET_PRINTING_IMAGE.src}
          alt={OFFSET_PRINTING_IMAGE.alt}
          title={OFFSET_PRINTING_IMAGE.title}
          geoData={OFFSET_PRINTING_IMAGE.geoData}
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
      <GlobalContainerColumn>
        <GlobalTextContainer>
          <GlobalMainTitle style={{ fontWeight: 800 }}>
            {memoizedData?.one.title}
          </GlobalMainTitle>
          <GlobalPart>{memoizedData?.one.content}</GlobalPart>

          <Globalh2TitleWithMB20>
            {memoizedData?.two.title}
          </Globalh2TitleWithMB20>
          <GlobalPart>{memoizedData?.two.content}</GlobalPart>

          <Globalh2TitleWithMB20>
            {memoizedData?.three.title}
          </Globalh2TitleWithMB20>
          <GlobalOrderedList>
            {memoizedData?.subThree.map((item, index) => (
              <GlobalOrderedListItem key={index}>
                {item.title}
                <GlobalNestedList>{renderSpecialPart(item)}</GlobalNestedList>
              </GlobalOrderedListItem>
            ))}
          </GlobalOrderedList>

          <Globalh2TitleWithMB20>
            {memoizedData?.four.title}
          </Globalh2TitleWithMB20>
          <GlobalList>
            {memoizedData?.fourSub.map((item, index) => (
              <GlobalListItem key={index}>{item.content}</GlobalListItem>
            ))}
          </GlobalList>

          <Globalh2TitleWithMB20>
            {memoizedData?.five.title}
          </Globalh2TitleWithMB20>
          <GlobalOrderedList>
            {memoizedData?.fiveSub.map((item, index) => (
              <GlobalOrderedListItem key={index}>
                <GlobalPartBox>{item.content}</GlobalPartBox>
              </GlobalOrderedListItem>
            ))}
          </GlobalOrderedList>

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
          <GlobalOrderedList>
            {memoizedData?.sevenSub.map((item, index) => (
              <GlobalOrderedListItem key={index}>
                <GlobalPartBox>{item.content}</GlobalPartBox>
              </GlobalOrderedListItem>
            ))}
          </GlobalOrderedList>

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
