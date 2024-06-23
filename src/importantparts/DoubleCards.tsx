import { useState, useEffect, useCallback } from "react";
import {
  DoubleCardContainer,
  RequestQuoteBGImage,
  SendFileBGImage,
  RequsetQuoteBGHalf,
  RequestQuoteTitle,
  SendFileTitle,
} from "../style/HomeStyles";
import {
  fetchDoubleCardsDarkData,
  fetchDoubleCardsLightData,
} from "../data/DoubleCardsData";

import { DoubleCardsDarkType, DoubleCardsLightType } from "../types/DataTypes";

export default function DoubleCards() {
  const [darkData, setDarkData] = useState<DoubleCardsDarkType>({
    imageDark: "",
    imageRQ: "",
    link: "",
    title: "",
  });
  const [lightData, setLightData] = useState<DoubleCardsLightType>({
    imageLight: "",
    imageSF: "",
    link: "",
    title: "",
  });

  const getDoubleCardsData = useCallback(async () => {
    try {
      const [dataDark, dataLight] = await Promise.all([
        fetchDoubleCardsDarkData(),
        fetchDoubleCardsLightData(),
      ]);

      setDarkData(dataDark);
      setLightData(dataLight);
    } catch (error) {
      console.error("Error fetching double cards data:", error);
    }
  }, []);

  useEffect(() => {
    getDoubleCardsData();
  }, [getDoubleCardsData]);

  return (
    <DoubleCardContainer>
      <RequestQuoteBGImage $backgroundimage={darkData.imageRQ}>
        <RequsetQuoteBGHalf src={darkData.imageDark} alt="HALF_DARK" />
        <RequestQuoteTitle>{darkData.title}</RequestQuoteTitle>
      </RequestQuoteBGImage>
      <SendFileBGImage $backgroundimage={lightData.imageSF}>
        <RequsetQuoteBGHalf src={lightData.imageLight} alt="HALF_LIGHT" />
        <SendFileTitle>{lightData.title}</SendFileTitle>
      </SendFileBGImage>
    </DoubleCardContainer>
  );
}
