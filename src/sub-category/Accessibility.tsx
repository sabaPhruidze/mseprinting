import { useState, useEffect } from "react";
import HelmetComponent from "../importantparts/Helmet"; // Import HelmetComponent for SEO
import { fetchAccessibilityData } from "../data/sub-category data/AccessibilityData";
import { AccessibilityDocument, TitleWithContent } from "../types/DataTypes";
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

export default function Accessibility() {
  const [accessibilityData, setAccessibilityData] =
    useState<AccessibilityDocument>();

  useEffect(() => {
    const getCarouselData = async () => {
      const data = await fetchAccessibilityData();

      if (data && data.help.mail.length > 0) {
        setAccessibilityData(data);
      }
    };

    getCarouselData();
  }, []);

  return (
    <GlobalContainerColumn>
      {/* HelmetComponent for SEO */}
      <HelmetComponent
        title="Accessibility Statement | MSE Printing"
        description="MSE Printing's commitment to accessibility ensures a seamless experience for all users. Learn about our accessibility standards and support options."
      />

      <GlobalMainTitle>{accessibilityData?.start[0].title}</GlobalMainTitle>
      {accessibilityData?.start.map((data: TitleWithContent) => (
        <GlobalBoxColumnStart key={data.title}>
          {data.title === "MSE Printing Accessibility Statement" ? (
            <GlobalPart>{data.content}</GlobalPart>
          ) : (
            <>
              <Globalh2Title>{data.title}</Globalh2Title>
              <GlobalPart>{data.content}</GlobalPart>
            </>
          )}
        </GlobalBoxColumnStart>
      ))}
      <GlobalBoxColumnStart>
        <Globalh2Title>{accessibilityData?.help.title}</Globalh2Title>
        <GlobalPartBox>
          {accessibilityData?.help.firstPart}
          <GlobalSpecialPart>
            {" "}
            {accessibilityData?.help.mail}{" "}
          </GlobalSpecialPart>
          {accessibilityData?.help.secondPart}
        </GlobalPartBox>
      </GlobalBoxColumnStart>
      <GlobalBoxColumnStart style={{ margin: 0 }}>
        <Globalh2Title>
          {accessibilityData?.accessibility.mainTitle}
        </Globalh2Title>
        <GlobalPart>{accessibilityData?.accessibility.firstPart}</GlobalPart>
        {accessibilityData?.accessibility.middlePart.map(
          (data: TitleWithContent) => (
            <GlobalBoxColumnStart
              key={data.title}
              style={{
                marginBottom:
                  data.title === "Readable Fonts and Contrast" ? 40 : 10,
              }}
            >
              <Globalh3Title>{data.title}</Globalh3Title>
              <GlobalPart style={{ marginBottom: 0 }}>
                {data.content}
              </GlobalPart>
            </GlobalBoxColumnStart>
          )
        )}
      </GlobalBoxColumnStart>
      {accessibilityData?.end.map((data: TitleWithContent) => (
        <GlobalBoxColumnStart key={data.title}>
          {data.content.firstPart?.length > 0 ? (
            <>
              <Globalh2Title>{data.title}</Globalh2Title>
              <GlobalPartBox>
                {data.content.firstPart}
                <GlobalSpecialPart> {data.content.mail} </GlobalSpecialPart>
                {data.content.secondPart}
              </GlobalPartBox>
            </>
          ) : (
            <>
              <Globalh2Title>{data.title}</Globalh2Title>
              <GlobalPart>{data.content}</GlobalPart>
            </>
          )}
        </GlobalBoxColumnStart>
      ))}
    </GlobalContainerColumn>
  );
}
