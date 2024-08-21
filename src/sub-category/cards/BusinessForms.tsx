import { useState, useEffect, useMemo } from "react";
import {
  GlobalContainerColumn,
  GlobalPart,
  GlobalMainTitle,
  GlobalRow,
  AlignedTextContainer, // Import the styled component for text alignment
  GlobalImageWrapperWithFloat, // Import the styled component for image wrapping
} from "../../style/GlobalStyle";
import { fetchBusinessFormsData } from "../../data/sub-category data/AllSubCategoryData";
import { BusinessFormsType } from "../../types/DataTypes";

export default function BusinessForms() {
  const [businessFormsData, setBusinessFormsData] =
    useState<BusinessFormsType | null>(null);

  useEffect(() => {
    const getBusinessFormsData = async () => {
      const data: BusinessFormsType | null = await fetchBusinessFormsData();
      if (data) {
        setBusinessFormsData(data);
      }
    };

    getBusinessFormsData();
  }, []);

  const memoizedData = useMemo(() => businessFormsData, [businessFormsData]);

  return (
    <GlobalContainerColumn>
      <GlobalMainTitle>{memoizedData?.one.title}</GlobalMainTitle>

      <AlignedTextContainer>
        <GlobalImageWrapperWithFloat>
          <img src={memoizedData?.fourth} alt={memoizedData?.one.title} />
        </GlobalImageWrapperWithFloat>

        {/* Directly map and render the text without wrapping in a block-level container */}
        {memoizedData?.two.map((item, index) => (
          <GlobalPart key={index}>{item}</GlobalPart>
        ))}

        <GlobalPart>{memoizedData?.three.firstPart}</GlobalPart>

        {memoizedData?.three.circle.map((item, index) => (
          <GlobalRow key={index}>{item}</GlobalRow>
        ))}

        <GlobalPart>{memoizedData?.three.secondPart}</GlobalPart>
      </AlignedTextContainer>
    </GlobalContainerColumn>
  );
}
