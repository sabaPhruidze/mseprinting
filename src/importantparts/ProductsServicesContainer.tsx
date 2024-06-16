import { useContext, useCallback } from "react";
import { rootContext } from "../Root";
import {
  ProductsServicesContainerStyle,
  LeftSideText,
  LeftSideContainer,
  RightSideContainer,
} from "../style/ProductServicesContainerStyles";
import { ProductServicesContainerLeftData } from "../data/ProductsServicesContainerData";
export default function ProductsServicesContainer() {
  const context = useContext(rootContext);
  if (!context) {
    throw new Error("rootContext must be used within a Root provider");
  }
  const { dispatching } = context;

  const handleMouseEnter = useCallback(() => {
    dispatching("SHOW_PRODUCT_SERVICES_WINDOW_FROM_BOX", true);
  }, [dispatching]);

  const handleMouseLeave = useCallback(() => {
    dispatching("SHOW_PRODUCT_SERVICES_WINDOW_FROM_BOX", false);
  }, [dispatching]);
  return (
    <ProductsServicesContainerStyle
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <LeftSideContainer>
        {ProductServicesContainerLeftData.map((data) => (
          <LeftSideText key={data}>{data}</LeftSideText>
        ))}
      </LeftSideContainer>
      <RightSideContainer></RightSideContainer>
    </ProductsServicesContainerStyle>
  );
}
