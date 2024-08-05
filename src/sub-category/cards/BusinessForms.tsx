import { useState, useEffect, useMemo } from "react";
import {
  GlobalContainerColumn,
  GlobalBoxColumnStart,
  GlobalPart,
  GlobalMainTitle,
  GlobalRow,
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
      {memoizedData?.two.map((item, index) => (
        <GlobalBoxColumnStart key={index}>
          <GlobalPart>{item}</GlobalPart>
        </GlobalBoxColumnStart>
      ))}
      <div style={{ textAlign: "left" }}>
        <GlobalPart>{memoizedData?.three.firstPart}</GlobalPart>

        {memoizedData?.three.circle.map((item, index) => (
          <GlobalRow key={index}>{item}</GlobalRow>
        ))}

        <GlobalPart>{memoizedData?.three.secondPart}</GlobalPart>
      </div>
    </GlobalContainerColumn>
  );
}
