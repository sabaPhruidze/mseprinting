import { useState, useEffect, useMemo } from "react";
import {
  GlobalContainerColumn,
  GlobalBoxColumnStart,
  GlobalPart,
  GlobalMainTitle,
} from "../../style/GlobalStyle";
import { fetchBrochuresCollateralData } from "../../data/sub-category data/AllSubCategoryData";
import { CommonDocumentWAS } from "../../types/DataTypes";

export default function BrochuresCollateral() {
  const [brochuresCollateralData, setBrochuresCollateralData] =
    useState<CommonDocumentWAS | null>(null);

  useEffect(() => {
    const getBrochuresCollateralData = async () => {
      const data = await fetchBrochuresCollateralData();
      if (data) {
        setBrochuresCollateralData(data);
      }
    };

    getBrochuresCollateralData();
  }, []);

  const memoizedData = useMemo(
    () => brochuresCollateralData,
    [brochuresCollateralData]
  );

  return (
    <GlobalContainerColumn>
      <GlobalMainTitle>{memoizedData?.one.title}</GlobalMainTitle>
      {memoizedData?.two.map((item, index) => (
        <GlobalBoxColumnStart key={index}>
          <GlobalPart>{item}</GlobalPart>
        </GlobalBoxColumnStart>
      ))}
    </GlobalContainerColumn>
  );
}
