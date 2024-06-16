import { useState, useEffect } from "react";
import {
  DoubleCardContainer,
  RequestQuoteBGImage,
  SendFileBGImage,
  RequsetQuoteBGHalf,
  RequestQuoteTitle,
  SendFileTitle,
} from "../style/HomeStyles";

import {
  DoubleCardsDarkType,
  DoubleCardsLightType,
  fetchDoubleCardsDarkData,
  fetchDoubleCardsLightData,
} from "../data/DoubleCardsData";

export default function DoubleCards() {
  const [DarkData, setDarkData] = useState<DoubleCardsDarkType>({
    imageDark: "",
    imageRQ: "",
    link: "",
    title: "",
  });
  const [LightData, setLightData] = useState<DoubleCardsLightType>({
    imageLight: "",
    imageSF: "",
    link: "",
    title: "",
  });

  useEffect(() => {
    const getDoubleCardsData = async () => {
      const dataDark = await fetchDoubleCardsDarkData();
      const dataLight = await fetchDoubleCardsLightData();
      if (
        dataDark.imageDark &&
        dataDark.imageDark?.length > 0 &&
        dataLight.imageLight &&
        dataLight.imageLight?.length > 0
      ) {
        setDarkData(dataDark);
        setLightData(dataLight);
      }
    };

    getDoubleCardsData();
  }, []);
  return (
    <DoubleCardContainer>
      <RequestQuoteBGImage $backgroundimage={DarkData.imageRQ}>
        <RequsetQuoteBGHalf src={DarkData.imageDark} alt="HALF_DARK" />
        <RequestQuoteTitle>{DarkData.title}</RequestQuoteTitle>
      </RequestQuoteBGImage>
      <SendFileBGImage $backgroundimage={LightData.imageSF}>
        <RequsetQuoteBGHalf src={LightData.imageLight} alt="HALF_LIGHT" />
        <SendFileTitle>{LightData.title}</SendFileTitle>
      </SendFileBGImage>
    </DoubleCardContainer>
  );
}
