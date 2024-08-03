// components/PrintingCopying.tsx

import { useState, useEffect, useMemo } from "react";
import {
  GlobalContainerColumn,
  GlobalBoxColumnStart,
  Globalh2TitleWithMB20,
  GlobalPart,
  GlobalMainTitle,
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
        <GlobalPart>{memoizedData?.three.firstPart}</GlobalPart>
        <GlobalPart>{memoizedData?.three.secondPart}</GlobalPart>
      </GlobalBoxColumnStart>
    </GlobalContainerColumn>
  );
}
