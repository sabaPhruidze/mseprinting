import { useContext, useState, useEffect, useCallback, useMemo } from "react";
import { rootContext } from "../Root";
import { useNavigate } from "react-router-dom";
import { HomeServicesFullDatasType } from "../types/DataTypes";
import { fetchHomeServicesDatas } from "../data/ProductsServicesContainerData";
import {
  ProductsServicesContainerStyle,
  LeftSideText,
  LeftSideContainer,
  RightSideContainer,
  RightSideText,
} from "../style/ProductServicesContainerStyles";

export default function ProductsServicesContainer() {
  const [productsAndServicesData, setProductsAndServicesData] =
    useState<HomeServicesFullDatasType | null>(null);

  useEffect(() => {
    const getHomeServicesFullData = async () => {
      const data = await fetchHomeServicesDatas();
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
      setHoveredItem(item);
    },
    [dispatching]
  );
  const handleMouseEnterMain = () => {
    dispatching("SHOW_PRODUCT_SERVICES_WINDOW_FROM_BOX", true);
  };

  const handleMouseLeave = useCallback(() => {
    dispatching("SHOW_PRODUCT_SERVICES_WINDOW_FROM_BOX", false);
    setHoveredItem(null);
  }, [dispatching]);

  const navigate = useNavigate();

  const handleClick = useCallback(
    (item: string) => {
      if (item === "Online Ordering Portals") {
        navigate("/online-ordering-portals");
        dispatching("SHOW_PRODUCT_SERVICES_WINDOW_FROM_BOX", false);
      } else if (item === "Graphic Design") {
        navigate("/graphic-design");
        dispatching("SHOW_PRODUCT_SERVICES_WINDOW_FROM_BOX", false);
      }
    },
    [navigate]
  );

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
        return [];
      case "Graphic Design":
        return [];
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
    <ProductsServicesContainerStyle
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnterMain}
    >
      <LeftSideContainer>
        {leftSideItems.map((data, index) => (
          <LeftSideText
            key={index}
            onMouseEnter={() => handleMouseEnter(data)}
            onClick={() => handleClick(data)}
          >
            {data}
          </LeftSideText>
        ))}
      </LeftSideContainer>
      <RightSideContainer>
        {getRightSideData().map((item, index) => (
          <RightSideText
            key={index}
            onClick={() => {
              navigate(item.link);
              dispatching("SHOW_PRODUCT_SERVICES_WINDOW_FROM_BOX", false);
            }}
          >
            {item.title}
          </RightSideText>
        ))}
      </RightSideContainer>
    </ProductsServicesContainerStyle>
  );
}
// s
