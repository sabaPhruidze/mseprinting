import React, { useEffect, useState } from "react";
import HelmetComponent from "../importantparts/Helmet"; // Import HelmetComponent for SEO
import {
  GlobalContainerColumn,
  GlobalBoxColumnStart,
  GlobalMainTitle,
  Globalh2Title,
  GlobalMainContentResources,
} from "../style/GlobalStyle";

import { ResourcesDocument } from "../types/DataTypes";
import { fetchResourceData } from "../data/sub-category data/AllSubCategoryData";

const Resources: React.FC = () => {
  const [resourcesData, setResourcesData] = useState<ResourcesDocument | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchResourceData();
      setResourcesData(data);
    };
    fetchData();
  }, []);

  return (
    resourcesData && (
      <GlobalContainerColumn>
        {/* HelmetComponent for SEO */}
        <HelmetComponent
          title="Resources | MSE Printing"
          description="Explore resources provided by MSE Printing, including industry guides, tips, and helpful information to support your printing and marketing needs."
        />

        <GlobalBoxColumnStart>
          <GlobalMainTitle>{resourcesData.one.title}</GlobalMainTitle>
          {Array.isArray(resourcesData.one.content) &&
            resourcesData.one.content.map((text: any, index: number) => (
              <GlobalMainContentResources key={index}>
                {text}
              </GlobalMainContentResources>
            ))}
        </GlobalBoxColumnStart>

        {resourcesData.two.map((section, index) => (
          <GlobalBoxColumnStart key={index}>
            <Globalh2Title>{section.title}</Globalh2Title>
            {Array.isArray(section.content) &&
              section.content.map((text: any, subIndex: number) => (
                <GlobalMainContentResources key={subIndex}>
                  {text}
                </GlobalMainContentResources>
              ))}
          </GlobalBoxColumnStart>
        ))}
      </GlobalContainerColumn>
    )
  );
};

export default Resources;
