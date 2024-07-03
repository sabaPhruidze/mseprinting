import { useState, useEffect } from "react";
import { fetchPrivacyAndPolicyData } from "../data/sub-category data/TermsAndConditionsData";
import {
  TermsAndConditionsDocument,
  TermsAndConditionsOne,
  TermsAndConditionsTwo,
  TermsAndConditionsThree,
  TermsAndConditionsFive,
} from "../types/DataTypes";
import {
  GlobalContainerColumn,
  GlobalBoxColumnStart,
  Globalh2Title,
  Globalh3Title,
  GlobalPartBox,
  GlobalPart,
  GlobalSpecialPart,
} from "../style/GlobalStyle";

export default function TermsAndConditions() {
  const [termsData, setTermsData] = useState<TermsAndConditionsDocument>();

  useEffect(() => {
    const getTermsData = async () => {
      const data = await fetchPrivacyAndPolicyData();

      if (data) {
        setTermsData(data);
      }
    };

    getTermsData();
  }, []);

  return (
    <GlobalContainerColumn>
      {termsData && (
        <>
          <GlobalBoxColumnStart>
            <Globalh2Title>{termsData.one.title}</Globalh2Title>
            <GlobalPartBox>
              {termsData.one.firstPart}
              <GlobalSpecialPart>
                {" "}
                {termsData.one.secondPartSpecial}{" "}
              </GlobalSpecialPart>
              {termsData.one.secondPartOne}
              {termsData.one.secondPartTwo}
            </GlobalPartBox>
          </GlobalBoxColumnStart>

          {termsData.two.map((data: TermsAndConditionsTwo) => (
            <GlobalBoxColumnStart key={data.title}>
              <Globalh3Title>{data.title}</Globalh3Title>
              <GlobalPart>{data.content}</GlobalPart>
            </GlobalBoxColumnStart>
          ))}

          {termsData.three.map((data: TermsAndConditionsThree) => (
            <GlobalBoxColumnStart key={data.title}>
              <Globalh3Title>{data.title}</Globalh3Title>
              <GlobalPartBox>
                {data.firstPartOne}
                <GlobalSpecialPart> {data.firstPartSpecial} </GlobalSpecialPart>
                {data.firstPartTwo}
              </GlobalPartBox>
            </GlobalBoxColumnStart>
          ))}

          {termsData.four.map((data: TermsAndConditionsTwo) => (
            <GlobalBoxColumnStart key={data.title}>
              <Globalh3Title>{data.title}</Globalh3Title>
              <GlobalPart>{data.content}</GlobalPart>
            </GlobalBoxColumnStart>
          ))}

          <GlobalBoxColumnStart>
            <Globalh2Title>{termsData.five.title}</Globalh2Title>
            <GlobalPartBox>
              {termsData.five.firstPartOne}
              <GlobalSpecialPart>
                {" "}
                {termsData.five.firstPartSpecial}{" "}
              </GlobalSpecialPart>
              {termsData.five.firstPartTwo}
              {termsData.five.secondPart}
            </GlobalPartBox>
          </GlobalBoxColumnStart>
        </>
      )}
    </GlobalContainerColumn>
  );
}
