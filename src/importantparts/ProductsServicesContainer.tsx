import React, { useContext, useState, useEffect, useCallback } from "react";
import { rootContext } from "../Root";
import { PrintingAndCopyingData, SignsData } from "../data/FooterData";
import { HomeServicesFullType } from "../types/DataTypes";
import { fetchHomeServicesData } from "../data/ProductsServicesContainerData";
import {
  ProductsServicesContainerStyle,
  LeftSideText,
  LeftSideContainer,
  RightSideContainer,
  RightSideText,
} from "../style/ProductServicesContainerStyles";

export default function ProductsServicesContainer() {
  const [productsAndServicesData, setProductsAndServicesData] =
    useState<HomeServicesFullType | null>(null);

  useEffect(() => {
    const getHomeServicesFullData = async () => {
      const data = await fetchHomeServicesData();
      console.log(data);
      if (data && (data.left?.length ?? 0) > 0) {
        setProductsAndServicesData(data);
      }
    };

    getHomeServicesFullData();
  }, []);

  const context = useContext(rootContext);
  if (!context) {
    throw new Error("rootContext must be used within a Root provider");
  }
  const { dispatching } = context;

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleMouseEnter = useCallback(
    (item: string) => {
      dispatching("SHOW_PRODUCT_SERVICES_WINDOW_FROM_BOX", true);
      setHoveredItem(item);
    },
    [dispatching]
  );

  const handleMouseLeave = useCallback(() => {
    dispatching("SHOW_PRODUCT_SERVICES_WINDOW_FROM_BOX", false);
    setHoveredItem(null);
  }, [dispatching]);

  const getRightSideData = () => {
    if (hoveredItem === "Signs") {
      return SignsData;
    } else if (hoveredItem === "Printing & Copying") {
      return PrintingAndCopyingData;
    }
    return [];
  };

  return (
    <ProductsServicesContainerStyle onMouseLeave={handleMouseLeave}>
      <LeftSideContainer>
        {productsAndServicesData?.left?.map((data, index) => (
          <LeftSideText key={index} onMouseEnter={() => handleMouseEnter(data)}>
            {data}
          </LeftSideText>
        ))}
      </LeftSideContainer>
      <RightSideContainer>
        {getRightSideData().map((item, index) => (
          <RightSideText key={index}>{item}</RightSideText>
        ))}
      </RightSideContainer>
    </ProductsServicesContainerStyle>
  );
}
