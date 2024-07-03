import { useState, useEffect } from "react";
import { fetchPrivacyAndPolicyData } from "../data/sub-category data/TermsAndConditionsData";
import {
  TermsAndConditionsDocument,
  TermsAndConditionsTwo,
  TermsAndConditionsThree,
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
import NavigateAndScroll from "../importantparts/NavigateAndScroll";

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
                <NavigateAndScroll path="/">
                  {" "}
                  {termsData.one.secondPartSpecial}{" "}
                </NavigateAndScroll>
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
                <GlobalSpecialPart>
                  <NavigateAndScroll path="/">
                    {" "}
                    {data.firstPartSpecial}{" "}
                  </NavigateAndScroll>
                </GlobalSpecialPart>
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
                <NavigateAndScroll path="/privacy-policy">
                  {" "}
                  {termsData.five.firstPartSpecial}{" "}
                </NavigateAndScroll>
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
