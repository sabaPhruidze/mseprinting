import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  GlobalContainerColumn,
  GlobalBoxColumnStart,
  Globalh2Title,
  GlobalPart,
} from "../style/GlobalStyle";
import { fetchAccessibilityData } from "../data/sub-category data/EoeDiversityData";
import { EOEDiversityDocument } from "../types/DataTypes";

export default function EoeDiversity() {
  const [eoeDiversityData, setEoeDiversityData] =
    useState<EOEDiversityDocument | null>(null);

  useEffect(() => {
    const getEoeDiversityData = async () => {
      const data = await fetchAccessibilityData();

      if (data) {
        setEoeDiversityData(data);
      }
    };

    getEoeDiversityData();
  }, []);

  return (
    <GlobalContainerColumn>
      <MainTitle>{eoeDiversityData?.mainTitle}</MainTitle>
      <GlobalBoxColumnStart>
        <Globalh2Title>{eoeDiversityData?.one.title}</Globalh2Title>
        <GlobalPart>{eoeDiversityData?.one.firstPart}</GlobalPart>
        <GlobalPart>{eoeDiversityData?.one.secondPart}</GlobalPart>
      </GlobalBoxColumnStart>
      <GlobalBoxColumnStart>
        <Globalh2Title>{eoeDiversityData?.two.title}</Globalh2Title>
        <GlobalPart>{eoeDiversityData?.two.content}</GlobalPart>
      </GlobalBoxColumnStart>
      <GlobalBoxColumnStart>
        <Globalh2Title>{eoeDiversityData?.three.title}</Globalh2Title>
        <GlobalPart>{eoeDiversityData?.three.firstPart}</GlobalPart>
        <GlobalPart>{eoeDiversityData?.three.secondPart}</GlobalPart>
        <GlobalPart>{eoeDiversityData?.three.thirdPart}</GlobalPart>
        <GlobalPart>{eoeDiversityData?.three.fourthPart}</GlobalPart>
      </GlobalBoxColumnStart>
    </GlobalContainerColumn>
  );
}

// One time use style

const MainTitle = styled.h1`
  color: ${(props) => props.theme.Black};
  margin-bottom: 50px;
`;
