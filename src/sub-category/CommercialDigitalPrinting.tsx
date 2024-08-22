import { useState, useEffect, useMemo, useCallback } from "react";
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
  GlobalImageWrapperWithFloat, // Styled component for image wrapping
  GlobalTextContainer, // Styled component for text wrapping
} from "../style/GlobalStyle";
import { fetchDigitalPrintingData } from "../data/sub-category data/AllSubCategoryData";
import { DigitalPrintingDocument } from "../types/DataTypes";

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
    <GlobalContainerColumn>
      <GlobalMainTitle>{memoizedData?.one.title}</GlobalMainTitle>

      <GlobalTextContainer>
        <GlobalImageWrapperWithFloat>
          <img src={memoizedData?.ten} alt={memoizedData?.one.title} />
        </GlobalImageWrapperWithFloat>

        <Globalh2TitleWithMB20>{memoizedData?.one.title}</Globalh2TitleWithMB20>
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

        <Globalh2TitleWithMB20>{memoizedData?.six.title}</Globalh2TitleWithMB20>
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
  );
}
