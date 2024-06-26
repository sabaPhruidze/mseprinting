import React, { useState, useEffect } from "react";
import {
  GlobalContainerColumn,
  GlobalBoxColumnStart,
  Globalh2Title,
  GlobalPart,
  GlobalSpecialPart,
} from "../style/GlobalStyle";
import { fetchPrivacyAndPolicyData } from "../data/sub-category data/PrivacyAndPolicyData";
import { PrivacyPolicySection } from "../types/DataTypes";
export default function PrivacyAndPolicy() {
  const [PrivacyPolicyData, setPrivacyPolicyData] =
    useState<PrivacyPolicySection>();

  useEffect(() => {
    const getCarouselData = async () => {
      const data = await fetchPrivacyAndPolicyData();

      if (data) {
        setPrivacyPolicyData(data);
        console.log(data);
      }
    };

    getCarouselData();
  }, []);
  return (
    <GlobalContainerColumn>
      <GlobalBoxColumnStart>
        <Globalh2Title>fe</Globalh2Title>
        <GlobalPart></GlobalPart>
      </GlobalBoxColumnStart>
    </GlobalContainerColumn>
  );
}
