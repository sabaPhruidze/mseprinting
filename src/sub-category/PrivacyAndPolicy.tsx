import { useState, useEffect } from "react";
import HelmetComponent from "../importantparts/Helmet"; // Import HelmetComponent for SEO
import {
  GlobalContainerColumn,
  GlobalBoxColumnStart,
  Globalh2Title,
  GlobalPart,
  GlobalSpecialPart,
  GlobalPartBox,
  GlobalMainTitle,
} from "../style/GlobalStyle";
import { fetchPrivacyAndPolicyData } from "../data/sub-category data/PrivacyAndPolicyData";
import { PrivacyAndPolicyDocument } from "../types/DataTypes";

export default function PrivacyAndPolicy() {
  const [privacyPolicyData, setPrivacyPolicyData] =
    useState<PrivacyAndPolicyDocument | null>(null);

  useEffect(() => {
    const getPrivacyPolicyData = async () => {
      const data = await fetchPrivacyAndPolicyData();
      if (data) {
        setPrivacyPolicyData(data);
      }
    };

    getPrivacyPolicyData();
  }, []);

  return (
    <GlobalContainerColumn>
      {/* HelmetComponent for SEO */}
      <HelmetComponent
        title="MSE Printing Privacy Policy | User Privacy and Data Protection"
        description="MSE Printing's privacy policy outlines our commitment to protecting user data and privacy. Learn about our data practices, user rights, and security measures."
      />

      <GlobalMainTitle>{privacyPolicyData?.one.title}</GlobalMainTitle>
      <GlobalBoxColumnStart>
        <GlobalPart>
          <GlobalPartBox>{privacyPolicyData?.one.firstPartOne} </GlobalPartBox>
          <GlobalSpecialPart>
            {privacyPolicyData?.one.firstSpecialPart}
          </GlobalSpecialPart>
          <GlobalPartBox> {privacyPolicyData?.one.firstPartTwo}</GlobalPartBox>
        </GlobalPart>
        <GlobalPart>{privacyPolicyData?.one.secondPart}</GlobalPart>
        <GlobalPart>{privacyPolicyData?.one.thirdPart}</GlobalPart>
      </GlobalBoxColumnStart>
      <GlobalBoxColumnStart>
        <Globalh2Title>{privacyPolicyData?.two.title}</Globalh2Title>
        <GlobalPart>{privacyPolicyData?.two.content}</GlobalPart>
      </GlobalBoxColumnStart>
      {/* Continue rendering other sections as before */}
      <GlobalBoxColumnStart>
        <Globalh2Title>{privacyPolicyData?.nine.title}</Globalh2Title>
        <GlobalPart>{privacyPolicyData?.nine.firstPart}</GlobalPart>
        <GlobalPart>{privacyPolicyData?.nine.secondPart}</GlobalPart>
        <GlobalPart>{privacyPolicyData?.nine.thirdPart}</GlobalPart>
        <GlobalPart>
          <GlobalPartBox>
            {privacyPolicyData?.nine.fourthPartOne}{" "}
          </GlobalPartBox>
          <GlobalSpecialPart>
            {privacyPolicyData?.nine.fourthSpecialPart}
          </GlobalSpecialPart>
          <GlobalPartBox>
            {" "}
            {privacyPolicyData?.nine.fourthPartTwo}
          </GlobalPartBox>
        </GlobalPart>
        <GlobalPart>{privacyPolicyData?.nine.fifthPart}</GlobalPart>
      </GlobalBoxColumnStart>
    </GlobalContainerColumn>
  );
}
