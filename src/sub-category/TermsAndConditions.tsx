import { useState, useEffect } from "react";
import HelmetComponent from "../importantparts/Helmet"; // Import HelmetComponent for SEO
import { fetchTermsAndConditionsData } from "../data/sub-category data/AllSubCategoryData";
import {
  TermsAndConditionsDocument,
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
  GlobalMainTitle,
} from "../style/GlobalStyle";
import NavigateAndScroll from "../importantparts/NavigateAndScroll";

export default function TermsAndConditions() {
  const [termsData, setTermsData] = useState<TermsAndConditionsDocument>();

  useEffect(() => {
    const getTermsData = async () => {
      const data = await fetchTermsAndConditionsData();
      if (data) {
        setTermsData(data);
      }
    };

    getTermsData();
  }, []);

  return (
    <GlobalContainerColumn>
      {/* HelmetComponent for SEO */}
      <HelmetComponent
        title="MSE Printing Terms and Conditions | Usage Guidelines and Policies"
        description="Review the terms and conditions for MSE Printing's services. Understand your rights and responsibilities when using our site and services."
      />

      {termsData && (
        <>
          <GlobalMainTitle>{termsData.one.title}</GlobalMainTitle>
          <GlobalBoxColumnStart>
            <GlobalPartBox>
              <GlobalPart>{termsData.one.firstPart} </GlobalPart>
              {termsData.one.secondPartOne}{" "}
              <GlobalSpecialPart>
                <NavigateAndScroll path="/">
                  {" "}
                  {termsData.one.secondPartSpecial}{" "}
                </NavigateAndScroll>
              </GlobalSpecialPart>
              {termsData.one.secondPartTwo}
            </GlobalPartBox>
          </GlobalBoxColumnStart>

          {termsData.two.map((data) => (
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

          {termsData.four.map((data) => (
            <GlobalBoxColumnStart key={data.title}>
              <Globalh3Title>{data.title}</Globalh3Title>
              <GlobalPart>{data.content}</GlobalPart>
            </GlobalBoxColumnStart>
          ))}

          <GlobalBoxColumnStart>
            <Globalh2Title>{termsData.five.title}</Globalh2Title>
            <GlobalPart>
              <GlobalPartBox>
                {termsData.five.firstPartOne}
                <GlobalSpecialPart>
                  <NavigateAndScroll path="/privacy-policy">
                    {" "}
                    {termsData.five.firstPartSpecial}{" "}
                  </NavigateAndScroll>
                </GlobalSpecialPart>
                {termsData.five.firstPartTwo}
              </GlobalPartBox>
            </GlobalPart>
            <GlobalPart> {termsData.five.secondPart}</GlobalPart>
          </GlobalBoxColumnStart>
        </>
      )}
    </GlobalContainerColumn>
  );
}
