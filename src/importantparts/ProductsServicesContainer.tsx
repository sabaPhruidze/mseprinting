import React, {
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { rootContext } from "../Root";
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

  const getRightSideData = useCallback(() => {
    if (!productsAndServicesData) return [];

    switch (hoveredItem) {
      case "Printing & Copying":
        return productsAndServicesData.PrintingAndCopying || [];
      case "Direct Mail & Mailing Services":
        return productsAndServicesData.DirectMailAndMailingServices || [];
      case "Signs":
        return productsAndServicesData.Signs || [];
      case "Online Ordering Portals":
        return productsAndServicesData.OnlineOrderingPortals
          ? [productsAndServicesData.OnlineOrderingPortals]
          : [];
      case "Graphic Design":
        return productsAndServicesData.GraphicDesign
          ? [productsAndServicesData.GraphicDesign]
          : [];
      case "Labels & Packaging":
        return productsAndServicesData.LabelsAndPackaging || [];
      case "Marketing Services":
        return productsAndServicesData.MarketingServices || [];
      case "Tradeshows & Events":
        return productsAndServicesData.TradeshowsAndEvents || [];
      case "Fulfillment Services":
        return productsAndServicesData.FulfillmentServices || [];
      case "Industry Specific":
        return productsAndServicesData.IndustrySpecific || [];
      default:
        return [];
    }
  }, [hoveredItem, productsAndServicesData]);

  const leftSideItems = useMemo(() => {
    return productsAndServicesData?.left || [];
  }, [productsAndServicesData]);

  return (
    <ProductsServicesContainerStyle onMouseLeave={handleMouseLeave}>
      <LeftSideContainer>
        {leftSideItems.map((data, index) => (
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
