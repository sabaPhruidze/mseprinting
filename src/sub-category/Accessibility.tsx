import React, { useState, useEffect } from "react";
import {
  AccessibilityDocument,
  fetchAccessibilityData,
  StartContent,
  EndContent,
  ContentPart,
} from "../data/sub-category data/AccessibilityData";

import {
  AccesibilityContainer,
  AccesibilityBox,
  AccesibilityMail,
  AccesibilityPart,
  AccesibilityContent,
  AccesibilityStarth2Title,
  AccesibilityStarth3Title,
  AccesibilityInsideBox,
} from "../style/sub-category styles/AccessibilityStyles";

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
    <AccesibilityContainer>
      {accessibilityData?.start.map((data: StartContent) => (
        <AccesibilityBox key={data.title}>
          <AccesibilityStarth2Title>{data.title}</AccesibilityStarth2Title>
          <AccesibilityContent>{data.content}</AccesibilityContent>
        </AccesibilityBox>
      ))}
      <AccesibilityBox>
        <AccesibilityStarth2Title>
          {accessibilityData?.help.title}
        </AccesibilityStarth2Title>
        <AccesibilityPart>{accessibilityData?.help.firstPart}</AccesibilityPart>
        <AccesibilityMail>{accessibilityData?.help.mail}</AccesibilityMail>
        <AccesibilityPart>
          {accessibilityData?.help.secondPart}
        </AccesibilityPart>
      </AccesibilityBox>
      <AccesibilityBox>
        <AccesibilityStarth2Title>
          {accessibilityData?.accessibility.mainTitle}
        </AccesibilityStarth2Title>
        <AccesibilityContent>
          {accessibilityData?.accessibility.firstPart}
        </AccesibilityContent>
        {accessibilityData?.accessibility.middlePart.map(
          (data: ContentPart) => (
            <AccesibilityInsideBox key={data.title}>
              <AccesibilityStarth3Title>{data.title}</AccesibilityStarth3Title>
              <AccesibilityPart>{data.content}</AccesibilityPart>
            </AccesibilityInsideBox>
          )
        )}
      </AccesibilityBox>
      <AccesibilityBox>
        {accessibilityData?.end.map((data: EndContent) => (
          <AccesibilityInsideBox key={data.title}>
            {data.content.firstPart?.length > 0 ? (
              <>
                <AccesibilityStarth2Title>
                  {data.title}
                </AccesibilityStarth2Title>
                <AccesibilityPart>{data.content.firstPart}</AccesibilityPart>
                <AccesibilityMail>{data.content.mail}</AccesibilityMail>
                <AccesibilityPart>{data.content.secondPart}</AccesibilityPart>
              </>
            ) : (
              <>
                <AccesibilityStarth2Title>
                  {data.title}
                </AccesibilityStarth2Title>
                <AccesibilityContent>{data.content}</AccesibilityContent>
              </>
            )}
          </AccesibilityInsideBox>
        ))}
      </AccesibilityBox>
    </AccesibilityContainer>
  );
}
