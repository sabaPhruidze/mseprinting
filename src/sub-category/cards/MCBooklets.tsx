import { useState, useEffect, useMemo } from "react";
import {
  GlobalContainerColumn,
  GlobalBoxColumnStart,
  GlobalPart,
  GlobalMainTitle,
} from "../../style/GlobalStyle";
import { fetchMKBookletsData } from "../../data/sub-category data/AllSubCategoryData";
import { CommonDocumentWAS } from "../../types/DataTypes";

export default function MCBooklets() {
  const [mcBookletsData, setMcBookletsData] =
    useState<CommonDocumentWAS | null>(null);

  useEffect(() => {
    const getMcBookletsData = async () => {
      const data: CommonDocumentWAS | null = await fetchMKBookletsData();
      if (data) {
        setMcBookletsData(data);
      }
    };

    getMcBookletsData();
  }, []);

  const memoizedData = useMemo(() => mcBookletsData, [mcBookletsData]);

  return (
    <GlobalContainerColumn>
      <GlobalMainTitle>{memoizedData?.one.title}</GlobalMainTitle>
      <GlobalPart>{memoizedData?.one.content}</GlobalPart>
      {memoizedData?.two.map((item, index) => (
        <GlobalBoxColumnStart key={index}>
          <GlobalPart>{item}</GlobalPart>
        </GlobalBoxColumnStart>
      ))}
    </GlobalContainerColumn>
  );
}
