import { useState, useEffect, useMemo } from "react";
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
import { fetchCopyPrintingData } from "../data/sub-category data/AllSubCategoryData";
import { PrintingCopyingDocument } from "../types/DataTypes";

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

  const memoizedData = useMemo(
    () => printingCopyingData,
    [printingCopyingData]
  );

  return (
    <GlobalContainerColumn>
      <GlobalMainTitle>{memoizedData?.one.title}</GlobalMainTitle>

      <GlobalTextContainer>
        <GlobalImageWrapperWithFloat>
          <img src={memoizedData?.four} alt={memoizedData?.one.title} />
        </GlobalImageWrapperWithFloat>

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
  );
}
