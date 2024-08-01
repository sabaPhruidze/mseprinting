import { useState, useEffect } from "react";
import {
  GlobalContainerColumn,
  GlobalBoxColumnStart,
  Globalh2TitleWithMB20,
  GlobalPart,
  GlobalSpecialPart,
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
import { fetchOffsetPrintingData } from "../data/sub-category data/CommercialOffsetPrintingData";
import { OffsetPrintingDocument } from "../types/DataTypes";

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

  return (
    <GlobalContainerColumn>
      <GlobalMainTitle>{offsetPrintingData?.one.mainTitle}</GlobalMainTitle>
      <GlobalBoxColumnStart>
        <Globalh2TitleWithMB20>
          {offsetPrintingData?.one.title}
        </Globalh2TitleWithMB20>
        <GlobalPart>{offsetPrintingData?.one.content}</GlobalPart>
      </GlobalBoxColumnStart>

      <GlobalBoxColumnStart>
        <Globalh2TitleWithMB20>
          {offsetPrintingData?.two.title}
        </Globalh2TitleWithMB20>
        <GlobalPart>{offsetPrintingData?.two.content}</GlobalPart>
      </GlobalBoxColumnStart>

      <GlobalBoxColumnStart>
        <Globalh2TitleWithMB20>
          {offsetPrintingData?.three.title}
        </Globalh2TitleWithMB20>
        <GlobalOrderedList>
          {offsetPrintingData?.subThree.map((item, index) => (
            <GlobalOrderedListItem key={index}>
              {item.title}
              <GlobalNestedList>
                {item.specialOne && (
                  <GlobalNestedListItem>
                    <GlobalSpecialPartDark>
                      {item.specialOne}{" "}
                    </GlobalSpecialPartDark>
                    <GlobalPartBox> {item.contentOne}</GlobalPartBox>
                  </GlobalNestedListItem>
                )}
                {item.specialTwo && (
                  <GlobalNestedListItem>
                    <GlobalSpecialPartDark>
                      {item.specialTwo}{" "}
                    </GlobalSpecialPartDark>
                    <GlobalPartBox>{item.contentTwo}</GlobalPartBox>
                  </GlobalNestedListItem>
                )}
              </GlobalNestedList>
            </GlobalOrderedListItem>
          ))}
        </GlobalOrderedList>
      </GlobalBoxColumnStart>

      <GlobalBoxColumnStart>
        <Globalh2TitleWithMB20>
          {offsetPrintingData?.four.title}
        </Globalh2TitleWithMB20>
        <GlobalList>
          {offsetPrintingData?.fourSub.map((item, index) => (
            <GlobalListItem key={index}>{item.content}</GlobalListItem>
          ))}
        </GlobalList>
      </GlobalBoxColumnStart>

      <GlobalBoxColumnStart>
        <Globalh2TitleWithMB20>
          {offsetPrintingData?.five.title}
        </Globalh2TitleWithMB20>
        <GlobalOrderedList>
          {offsetPrintingData?.fiveSub.map((item, index) => (
            <GlobalOrderedListItem key={index}>
              <GlobalPartBox>{item.content}</GlobalPartBox>
            </GlobalOrderedListItem>
          ))}
        </GlobalOrderedList>
      </GlobalBoxColumnStart>

      <GlobalBoxColumnStart>
        <Globalh2TitleWithMB20>
          {offsetPrintingData?.six.title}
        </Globalh2TitleWithMB20>
        <GlobalOrderedList>
          {offsetPrintingData?.sixSub.map((item, index) => (
            <GlobalOrderedListItem key={index}>
              <GlobalPartBox>{item.content}</GlobalPartBox>
            </GlobalOrderedListItem>
          ))}
        </GlobalOrderedList>
      </GlobalBoxColumnStart>

      <GlobalBoxColumnStart>
        <Globalh2TitleWithMB20>
          {offsetPrintingData?.seven.title}
        </Globalh2TitleWithMB20>
        <GlobalOrderedList>
          {offsetPrintingData?.sevenSub.map((item, index) => (
            <GlobalOrderedListItem key={index}>
              <GlobalPartBox>{item.content}</GlobalPartBox>
            </GlobalOrderedListItem>
          ))}
        </GlobalOrderedList>
      </GlobalBoxColumnStart>

      <GlobalBoxColumnStart>
        <Globalh2TitleWithMB20>
          {offsetPrintingData?.eight.title}
        </Globalh2TitleWithMB20>
        <GlobalOrderedList>
          {offsetPrintingData?.eightSub.map((item, index) => (
            <GlobalOrderedListItem key={index}>
              <GlobalPartBox>{item.content}</GlobalPartBox>
            </GlobalOrderedListItem>
          ))}
        </GlobalOrderedList>
      </GlobalBoxColumnStart>

      <GlobalBoxColumnStart>
        <Globalh2TitleWithMB20>
          {offsetPrintingData?.nine.title}
        </Globalh2TitleWithMB20>
        <GlobalPart>{offsetPrintingData?.nine.firstPart}</GlobalPart>
        <GlobalPart>{offsetPrintingData?.nine.secondPart}</GlobalPart>
      </GlobalBoxColumnStart>
    </GlobalContainerColumn>
  );
}
