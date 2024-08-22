import { useState, useEffect, useMemo } from "react";
import {
  GlobalContainerColumn,
  GlobalMainTitle,
  GlobalImageWrapperWithFloat,
  GlobalTextContainer,
  GlobalPart,
} from "../../style/GlobalStyle";
import { fetchBannersPostersData } from "../../data/sub-category data/AllSubCategoryData";
import { CommonDocumentWAS } from "../../types/DataTypes";

export default function BannersPosters() {
  const [bannersPostersData, setBannersPostersData] =
    useState<CommonDocumentWAS | null>(null);

  useEffect(() => {
    const getBannersPostersData = async () => {
      const data = await fetchBannersPostersData();
      if (data) {
        setBannersPostersData(data);
      }
    };

    getBannersPostersData();
  }, []);

  const memoizedData = useMemo(() => bannersPostersData, [bannersPostersData]);

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
