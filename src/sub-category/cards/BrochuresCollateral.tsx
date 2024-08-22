import { useState, useEffect, useMemo } from "react";
import {
  GlobalContainerColumn,
  GlobalPart,
  GlobalMainTitle,
  GlobalImageWrapperWithFloat, // Import the styled component for image wrapping
  GlobalTextContainer, // Import the styled component for text wrapping
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

      <GlobalTextContainer>
        <GlobalImageWrapperWithFloat>
          <img src={memoizedData?.three} alt={memoizedData?.one.title} />
        </GlobalImageWrapperWithFloat>

        {memoizedData?.two.map((item, index) => (
          <GlobalPart key={index}>{item}</GlobalPart>
        ))}
      </GlobalTextContainer>
    </GlobalContainerColumn>
  );
}
