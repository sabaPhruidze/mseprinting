import { useState, useEffect } from "react";
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
      <GlobalBoxColumnStart>
        <Globalh2Title>{privacyPolicyData?.three.title}</Globalh2Title>
        <GlobalPart>{privacyPolicyData?.three.firstPart}</GlobalPart>
        <GlobalPart>{privacyPolicyData?.three.secondPart}</GlobalPart>
        <GlobalPart>{privacyPolicyData?.three.thirdPart}</GlobalPart>
        <GlobalPart>{privacyPolicyData?.three.fourthPart}</GlobalPart>
        <GlobalPart>{privacyPolicyData?.three.fifthPart}</GlobalPart>
        <GlobalPart>{privacyPolicyData?.three.sixthPart}</GlobalPart>
      </GlobalBoxColumnStart>
      <GlobalBoxColumnStart>
        <Globalh2Title>{privacyPolicyData?.four.title}</Globalh2Title>
        <GlobalPart>{privacyPolicyData?.four.firstPart}</GlobalPart>
        <GlobalPart>{privacyPolicyData?.four.secondPart}</GlobalPart>
      </GlobalBoxColumnStart>
      <GlobalBoxColumnStart>
        <Globalh2Title>{privacyPolicyData?.five.title}</Globalh2Title>
        <GlobalPart>{privacyPolicyData?.five.firstPart}</GlobalPart>
        <GlobalPart>
          <GlobalPartBox>
            {privacyPolicyData?.five.secondPartOne}{" "}
          </GlobalPartBox>
          <GlobalSpecialPart>
            {privacyPolicyData?.five.secondPartSpecial}
          </GlobalSpecialPart>
          <GlobalPartBox>
            {" "}
            {privacyPolicyData?.five.secondPartTwo}
          </GlobalPartBox>
        </GlobalPart>
      </GlobalBoxColumnStart>
      <GlobalBoxColumnStart>
        <Globalh2Title>{privacyPolicyData?.six.title}</Globalh2Title>
        <GlobalPart>
          <GlobalPartBox>{privacyPolicyData?.six.firstPartOne} </GlobalPartBox>
          <GlobalSpecialPart>
            {privacyPolicyData?.six.firstPartSpecial}
          </GlobalSpecialPart>
          <GlobalPartBox> {privacyPolicyData?.six.firstPartTwo}</GlobalPartBox>
        </GlobalPart>
      </GlobalBoxColumnStart>
      <GlobalBoxColumnStart>
        <Globalh2Title>{privacyPolicyData?.seven.title}</Globalh2Title>
        <GlobalPart>{privacyPolicyData?.seven.content}</GlobalPart>
      </GlobalBoxColumnStart>
      <GlobalBoxColumnStart>
        <Globalh2Title>{privacyPolicyData?.eight.title}</Globalh2Title>
        <GlobalPart>
          <GlobalPartBox>
            {privacyPolicyData?.eight.firstPartOne}{" "}
          </GlobalPartBox>
          <GlobalSpecialPart>
            {privacyPolicyData?.eight.firstPartSpecial}
          </GlobalSpecialPart>
          <GlobalPartBox>
            {" "}
            {privacyPolicyData?.eight.firstPartTwo}
          </GlobalPartBox>
        </GlobalPart>
      </GlobalBoxColumnStart>
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
