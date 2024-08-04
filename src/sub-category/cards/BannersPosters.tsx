import React, { useState, useEffect, useMemo } from "react";
import {
  GlobalContainerColumn,
  GlobalBoxColumnStart,
  Globalh2TitleWithMB20,
  GlobalPart,
  GlobalMainTitle,
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
      {memoizedData?.two.map((item, index) => (
        <GlobalBoxColumnStart key={index}>
          <GlobalPart>{item}</GlobalPart>
        </GlobalBoxColumnStart>
      ))}
    </GlobalContainerColumn>
  );
}
