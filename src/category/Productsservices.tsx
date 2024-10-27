import React, { useEffect, useState, useCallback, useMemo } from "react";
import {
  GlobalContainerColumn,
  GlobalBoxColumnStart,
  GlobalMainTitle,
  GlobalMainContent,
  Globalh2Title,
  GlobalSpecialPart,
} from "../style/GlobalStyle";
import { ProductServicesDocument, SpecialStandard } from "../types/DataTypes";
import { fetchProductServicesPageData } from "../data/sub-category data/AllSubCategoryData";

const ProductsServices: React.FC = () => {
  const [productServicesData, setProductServicesData] =
    useState<ProductServicesDocument | null>(null);

  useEffect(() => {
    const fetchProductServicesData = async () => {
      const data = await fetchProductServicesPageData();
      setProductServicesData(data);
    };
    fetchProductServicesData();
  }, []);

  // Function to render items with Special and Standard properties
  const renderSpecialStandardContent = useCallback(
    (item: SpecialStandard, index: number) => (
      <div key={index}>
        {item.Special && (
          <GlobalMainContent>
            <strong>{item.Special}</strong>
          </GlobalMainContent>
        )}
        {item.Standard && (
          <GlobalMainContent>{item.Standard}</GlobalMainContent>
        )}
      </div>
    ),
    []
  );

  // Function to render content based on the type (string, array, or SpecialStandard object)
  const renderContent = useCallback(
    (content: any) => {
      if (Array.isArray(content)) {
        return content.map((item, index) => {
          if (typeof item === "string") {
            return <GlobalMainContent key={index}>{item}</GlobalMainContent>;
          } else if (
            typeof item === "object" &&
            item !== null &&
            "Special" in item &&
            "Standard" in item
          ) {
            return renderSpecialStandardContent(item, index);
          }
          return null;
        });
      } else if (typeof content === "string") {
        return <GlobalMainContent>{content}</GlobalMainContent>;
      } else if (
        content &&
        typeof content === "object" &&
        "Special" in content &&
        "Standard" in content
      ) {
        return renderSpecialStandardContent(content, 0); // For single SpecialStandard object
      }
      return null;
    },
    [renderSpecialStandardContent]
  );

  // Render section with a title and content
  const renderSection = useCallback(
    (title: string | undefined, content: any) => (
      <GlobalBoxColumnStart>
        <GlobalMainTitle>{title}</GlobalMainTitle>
        {renderContent(content)}
      </GlobalBoxColumnStart>
    ),
    [renderContent]
  );

  // Memoize sections for optimized rendering
  const memoizedSections = useMemo(() => {
    if (!productServicesData) return null;

    return (
      <>
        {renderSection(
          productServicesData.one.title,
          productServicesData.one.content
        )}

        {productServicesData.two.map((section, index) => (
          <div key={index}>
            <Globalh2Title>{section.title}</Globalh2Title>
            {renderContent(section.content)}
          </div>
        ))}

        {renderSection(
          productServicesData.three.title,
          productServicesData.three.content
        )}
      </>
    );
  }, [productServicesData, renderSection, renderContent]);

  if (!productServicesData) return null;

  return <GlobalContainerColumn>{memoizedSections}</GlobalContainerColumn>;
};

export default ProductsServices;
