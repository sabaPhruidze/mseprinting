import { useMemo, useState, useEffect, useCallback } from "react";
import WWDCCard from "./WWDCCard";
import {
  WWDCContainer,
  WWDCCSpecialitiesContainers,
  WWDCTitle,
  WWDCParagraph,
} from "../style/HomeStyles";

import { WWDCSpecialitiesContentType } from "../types/DataTypes";
import { fetchWWDCSpecialitiesContentData } from "../data/CardData";

export default function WhatWeDoCards() {
  const [WWDCSpecialitiesData, setWWDCSpecialitiesData] =
    useState<WWDCSpecialitiesContentType>({ paragraph: "", title: "" });

  const getWWDCSpecialitiesData = useCallback(async () => {
    const data = await fetchWWDCSpecialitiesContentData();
    if (data.paragraph && data.paragraph?.length > 0) {
      setWWDCSpecialitiesData(data);
    }
  }, []);

  useEffect(() => {
    getWWDCSpecialitiesData();
  }, [getWWDCSpecialitiesData]);

  const specialitiesContent = useMemo(
    () => (
      <>
        <WWDCTitle>{WWDCSpecialitiesData.title}</WWDCTitle>
        <WWDCParagraph>{WWDCSpecialitiesData.paragraph}</WWDCParagraph>
      </>
    ),
    [WWDCSpecialitiesData]
  );

  return (
    <WWDCContainer>
      <WWDCCSpecialitiesContainers>
        {specialitiesContent}
      </WWDCCSpecialitiesContainers>
      <div>
        <WWDCCard />
      </div>
    </WWDCContainer>
  );
}
