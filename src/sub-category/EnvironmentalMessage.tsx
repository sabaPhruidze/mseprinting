import { useState, useEffect } from "react";
import HelmetComponent from "../importantparts/Helmet"; // Import HelmetComponent for SEO
import {
  GlobalContainerColumn,
  GlobalBoxColumnStart,
  GlobalPart,
  Globalh2Title,
  GlobalRow,
  GlobalPartBox,
  GlobalMainTitle,
} from "../style/GlobalStyle";
import { fetchEnvironmentalMessageData } from "../data/sub-category data/AllSubCategoryData";
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
      {/* HelmetComponent for SEO */}
      <HelmetComponent
        title="Environmental Commitment | MSE Printing"
        description="Discover MSE Printing's commitment to sustainability and environmental responsibility, promoting eco-friendly practices in all our services."
      />

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
