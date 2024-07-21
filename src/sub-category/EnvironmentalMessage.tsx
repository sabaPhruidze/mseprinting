import { useState, useEffect } from "react";

import {
  GlobalContainerColumn,
  GlobalBoxColumnStart,
  GlobalPart,
  Globalh2Title,
  GlobalRow,
  GlobalPartBox,
  GlobalMainTitle,
} from "../style/GlobalStyle";
import { fetchEnvironmentalMessageData } from "../data/sub-category data/EnvironmentalMessageData";
import { EnvironmentalMessageDocument } from "../types/DataTypes";

export default function EnvironmentalMessage() {
  const [environmentalData, setEnvironmentalData] =
    useState<EnvironmentalMessageDocument | null>(null);

  useEffect(() => {
    const getEnvironmentalData = async () => {
      const data = await fetchEnvironmentalMessageData();

      if (data) {
        setEnvironmentalData(data);
      }
    };

    getEnvironmentalData();
  }, []);

  return (
    <GlobalContainerColumn>
      <GlobalMainTitle>{environmentalData?.title}</GlobalMainTitle>
      <GlobalBoxColumnStart>
        <GlobalPart>{environmentalData?.firstPart}</GlobalPart>
        <GlobalPart>{environmentalData?.secondPart}</GlobalPart>
        <GlobalPart>{environmentalData?.thirdPart}</GlobalPart>
        <ul>
          {environmentalData?.fourthPart.map((item, index) => (
            <GlobalRow key={index}>
              <Globalh2Title style={{ marginRight: 5 }}>
                {item.title}
              </Globalh2Title>
              <GlobalPartBox>{item.content}</GlobalPartBox>
            </GlobalRow>
          ))}
        </ul>
        <GlobalPart>{environmentalData?.fifthPart}</GlobalPart>
      </GlobalBoxColumnStart>
    </GlobalContainerColumn>
  );
}
