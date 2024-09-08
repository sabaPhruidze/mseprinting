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
  GlobalTextContainer, // Import the styled component for text wrapping
  FullBackgroundContainer,
  TitleAndButtonContainer,
  FullScreenTitle,
  FullScreenButton,
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

  const memoizedData = useMemo(() => offsetPrintingData, [offsetPrintingData]);

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
      <FullBackgroundContainer bgimage={memoizedData?.ten || ""}>
        <TitleAndButtonContainer>
          <FullScreenTitle>{memoizedData?.one.mainTitle}</FullScreenTitle>
          <FullScreenButton>Request a Quote</FullScreenButton>
        </TitleAndButtonContainer>
      </FullBackgroundContainer>
      <GlobalContainerColumn>
        {/* <GlobalMainTitle>{memoizedData?.one.mainTitle}</GlobalMainTitle> */}

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
