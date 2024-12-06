import React, { useEffect, useState } from "react";
import {
  GlobalContainerColumn,
  GlobalBoxColumnStart,
  GlobalMainTitle,
  GlobalMainContent,
  Globalh2Title,
  GlobalSpecialPart,
} from "../style/GlobalStyle";
import HelmetComponent from "../importantparts/Helmet"; // Import HelmetComponent for SEO
import { AboutUsDocument } from "../types/DataTypes";
import { fetchAboutUsData } from "../data/sub-category data/AllSubCategoryData";

const AboutUs: React.FC = () => {
  const [aboutUsData, setAboutUsData] = useState<AboutUsDocument | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAboutUsData();
      setAboutUsData(data);
    };
    fetchData();
  }, []);

  if (!aboutUsData) return null;

  const renderContent = (content: any) => {
    if (Array.isArray(content)) {
      return content.map((item, index) => {
        if (typeof item === "string") {
          return <GlobalMainContent key={index}>{item}</GlobalMainContent>;
        } else if (
          typeof item === "object" &&
          item.FirstPart &&
          item.specialPart &&
          item.SecondPart
        ) {
          return (
            <GlobalMainContent key={index}>
              {item.FirstPart}{" "}
              <GlobalSpecialPart>{item.specialPart}</GlobalSpecialPart>
              {item.SecondPart}
            </GlobalMainContent>
          );
        } else if (typeof item === "object" && item.title && item.content) {
          return (
            <div key={index}>
              <Globalh2Title>{item.title}</Globalh2Title>
              {renderContent(item.content)}
            </div>
          );
        }
        return null;
      });
    } else if (typeof content === "string") {
      return <GlobalMainContent>{content}</GlobalMainContent>;
    }
    return null;
  };

  const renderSection = (title: string | undefined, content: any) => (
    <GlobalBoxColumnStart>
      <GlobalMainTitle>{title}</GlobalMainTitle>
      {renderContent(content)}
    </GlobalBoxColumnStart>
  );

  return (
    <GlobalContainerColumn>
      <HelmetComponent
        title="About Us | MSE Printing"
        description="Learn more about MSE Printing's dedication to quality, service, and innovation in printing and marketing solutions."
        canonical="https://www.mseprinting.com/about-us" // Add the canonical URL
      />

      {renderSection(aboutUsData.one.title, aboutUsData.one.content)}
      {renderSection(aboutUsData.two.title, aboutUsData.two.content)}
      {renderSection(aboutUsData.three.title, aboutUsData.three.content)}
      {renderSection(aboutUsData.four.title, aboutUsData.four.content)}
      {renderSection(aboutUsData.five.title, aboutUsData.five.content)}
      {renderSection(aboutUsData.six.title, aboutUsData.six.content)}
      {renderSection(aboutUsData.seven.title, aboutUsData.seven.content)}
    </GlobalContainerColumn>
  );
};

export default AboutUs;
