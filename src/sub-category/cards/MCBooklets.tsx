import { useState, useEffect, useMemo } from "react";
import {
  GlobalContainerColumn,
  GlobalPart,
  GlobalMainTitle,
  GlobalImageWrapperWithFloat, // Import the styled component for image wrapping
  GlobalTextContainer, // Import the styled component for text wrapping
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

      <GlobalTextContainer>
        <GlobalImageWrapperWithFloat>
          <img src={memoizedData?.three} alt={memoizedData?.one.title} />
        </GlobalImageWrapperWithFloat>

        <GlobalPart>{memoizedData?.one.content}</GlobalPart>

        {memoizedData?.two.map((item, index) => (
          <GlobalPart key={index}>{item}</GlobalPart>
        ))}
      </GlobalTextContainer>
    </GlobalContainerColumn>
  );
}
