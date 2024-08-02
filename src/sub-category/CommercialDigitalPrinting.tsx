// components/CommercialDigitalPrinting.tsx

import { useState, useEffect, useMemo, useCallback } from "react";
import {
  GlobalContainerColumn,
  GlobalBoxColumnStart,
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
      <GlobalMainTitle>{memoizedData?.one.mainTitle}</GlobalMainTitle>
      <GlobalBoxColumnStart>
        {memoizedData?.one.title && (
          <Globalh2TitleWithMB20>
            {memoizedData?.one.title}
          </Globalh2TitleWithMB20>
        )}
        {memoizedData?.one.content && (
          <GlobalPart>{memoizedData?.one.content}</GlobalPart>
        )}
      </GlobalBoxColumnStart>

      {memoizedData?.two.map((item, index) => (
        <GlobalBoxColumnStart key={index}>
          <Globalh2TitleWithMB20>{item.title}</Globalh2TitleWithMB20>
          {item.content && <GlobalPart>{item.content}</GlobalPart>}
        </GlobalBoxColumnStart>
      ))}

      <GlobalBoxColumnStart>
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
      </GlobalBoxColumnStart>

      <GlobalBoxColumnStart>
        <Globalh2TitleWithMB20>
          {memoizedData?.four.title}
        </Globalh2TitleWithMB20>
        <GlobalOrderedList>
          {memoizedData?.fourSub.map((item, index) => (
            <GlobalOrderedListItem key={index}>
              {item.title && <strong>{item.title}</strong>}
              {item.content && <GlobalPartBox> {item.content}</GlobalPartBox>}
            </GlobalOrderedListItem>
          ))}
        </GlobalOrderedList>
      </GlobalBoxColumnStart>

      <GlobalBoxColumnStart>
        <Globalh2TitleWithMB20>
          {memoizedData?.five.title}
        </Globalh2TitleWithMB20>
        <GlobalList>
          {memoizedData?.fiveSub.map((item, index) => (
            <GlobalListItem key={index}>
              {item.title && <strong>{item.title}</strong>}
              {item.content && <GlobalPartBox> {item.content}</GlobalPartBox>}
            </GlobalListItem>
          ))}
        </GlobalList>
      </GlobalBoxColumnStart>

      <GlobalBoxColumnStart>
        <Globalh2TitleWithMB20>{memoizedData?.six.title}</Globalh2TitleWithMB20>
        <GlobalOrderedList>
          {memoizedData?.sixSub.map((item, index) => (
            <GlobalOrderedListItem key={index}>
              {item.title && <strong>{item.title}</strong>}
              {item.content && <GlobalPartBox> {item.content}</GlobalPartBox>}
            </GlobalOrderedListItem>
          ))}
        </GlobalOrderedList>
      </GlobalBoxColumnStart>

      <GlobalBoxColumnStart>
        <Globalh2TitleWithMB20>
          {memoizedData?.seven.title}
        </Globalh2TitleWithMB20>
        <GlobalList>
          {memoizedData?.sevenSub.map((item, index) => (
            <GlobalListItem key={index}>
              {item.title && <strong>{item.title}</strong>}
              {item.content && <GlobalPartBox> {item.content}</GlobalPartBox>}
            </GlobalListItem>
          ))}
        </GlobalList>
      </GlobalBoxColumnStart>

      <GlobalBoxColumnStart>
        <Globalh2TitleWithMB20>
          {memoizedData?.eight.title}
        </Globalh2TitleWithMB20>
        <GlobalOrderedList>
          {memoizedData?.eightSub.map((item, index) => (
            <GlobalOrderedListItem key={index}>
              {item.title && <strong>{item.title}</strong>}
              {item.content && <GlobalPartBox> {item.content}</GlobalPartBox>}
            </GlobalOrderedListItem>
          ))}
        </GlobalOrderedList>
      </GlobalBoxColumnStart>

      <GlobalBoxColumnStart>
        <Globalh2TitleWithMB20>
          {memoizedData?.nine.title}
        </Globalh2TitleWithMB20>
        <GlobalPart>{memoizedData?.nine.firstPart}</GlobalPart>
        <GlobalPart>{memoizedData?.nine.secondPart}</GlobalPart>
      </GlobalBoxColumnStart>
    </GlobalContainerColumn>
  );
}
