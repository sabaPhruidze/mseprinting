// components/DirectMailing.tsx

import { useState, useEffect, useMemo } from "react";
import {
  GlobalContainerColumn,
  GlobalBoxColumnStart,
  Globalh2TitleWithMB20,
  GlobalPart,
  GlobalMainTitle,
} from "../style/GlobalStyle";
import { fetchDirectMailingData } from "../data/sub-category data/AllSubCategoryData";
import { CommonDocument } from "../types/DataTypes";

export default function DirectMailing() {
  const [directMailingData, setDirectMailingData] =
    useState<CommonDocument | null>(null);

  useEffect(() => {
    const getDirectMailingData = async () => {
      const data = await fetchDirectMailingData();
      if (data) {
        setDirectMailingData(data);
      }
    };

    getDirectMailingData();
  }, []);

  const memoizedData = useMemo(() => directMailingData, [directMailingData]);

  return (
    <GlobalContainerColumn>
      <GlobalMainTitle>{memoizedData?.one.title}</GlobalMainTitle>

      {memoizedData?.two.map((item, index) => (
        <GlobalBoxColumnStart key={index}>
          <Globalh2TitleWithMB20>{item.title}</Globalh2TitleWithMB20>
          {item.content && <GlobalPart>{item.content}</GlobalPart>}
        </GlobalBoxColumnStart>
      ))}
    </GlobalContainerColumn>
  );
}
