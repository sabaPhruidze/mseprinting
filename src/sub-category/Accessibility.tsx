import { useState, useEffect } from "react";
import { fetchAccessibilityData } from "../data/sub-category data/AccessibilityData";
import {
  AccessibilityDocument,
  StartContent,
  EndContent,
  ContentPart,
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
      {accessibilityData?.start.map((data: StartContent) => (
        <GlobalBoxColumnStart key={data.title}>
          <Globalh2Title>{data.title}</Globalh2Title>
          <GlobalPart>{data.content}</GlobalPart>
        </GlobalBoxColumnStart>
      ))}
      <GlobalBoxColumnStart>
        <Globalh2Title>{accessibilityData?.help.title}</Globalh2Title>
        <GlobalPartBox>
          {accessibilityData?.help.firstPart}
          <GlobalSpecialPart>{accessibilityData?.help.mail}</GlobalSpecialPart>
          {accessibilityData?.help.secondPart}
        </GlobalPartBox>
      </GlobalBoxColumnStart>
      <GlobalBoxColumnStart style={{ margin: 0 }}>
        <Globalh2Title>
          {accessibilityData?.accessibility.mainTitle}
        </Globalh2Title>
        <GlobalPart>{accessibilityData?.accessibility.firstPart}</GlobalPart>
        {accessibilityData?.accessibility.middlePart.map(
          (data: ContentPart) => (
            <GlobalBoxColumnStart key={data.title}>
              <Globalh3Title>{data.title}</Globalh3Title>
              <GlobalPart>{data.content}</GlobalPart>
            </GlobalBoxColumnStart>
          )
        )}
      </GlobalBoxColumnStart>
      {accessibilityData?.end.map((data: EndContent) => (
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
