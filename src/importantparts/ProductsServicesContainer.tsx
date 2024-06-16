import React, { useContext, useState, useCallback } from "react";
import { rootContext } from "../Root";
import { PrintingAndCopyingData, SignsData } from "../data/FooterData";
import {
  ProductsServicesContainerStyle,
  LeftSideText,
  LeftSideContainer,
  RightSideContainer,
  RightSideText,
} from "../style/ProductServicesContainerStyles";
import { ProductServicesContainerLeftData } from "../data/ProductsServicesContainerData";

export default function ProductsServicesContainer() {
  const context = useContext(rootContext);
  if (!context) {
    throw new Error("rootContext must be used within a Root provider");
  }
  const { dispatching } = context;

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = useCallback(
    (item: any) => {
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
        {ProductServicesContainerLeftData.map((data) => (
          <LeftSideText key={data} onMouseEnter={() => handleMouseEnter(data)}>
            {data}
          </LeftSideText>
        ))}
      </LeftSideContainer>
      <RightSideContainer>
        {getRightSideData().map((item) => (
          <RightSideText key={item}>{item}</RightSideText>
        ))}
      </RightSideContainer>
    </ProductsServicesContainerStyle>
  );
}
