import { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  GlobalContainerColumn,
  GlobalPart,
  GlobalTextContainer,
  FullBackgroundContainerZERO,
  TitleAndButtonContainer,
  FullScreenTitle,
  FullScreenButton,
  GlobalMainContent,
} from "../../style/GlobalStyle";
import ImageWithSEO from "../../importantparts/ImageWithCEO";
import { SubCategoryCommonTypes } from "../../types/DataTypes";
import {
  fetchInventoryManagementData,
  fetchMarketingSalesKitsData,
  fetchPickPackData,
  fetchProductFulfillmentData,
} from "../../data/sub-category data/AllSubCategoryData";
import {
  INVENTORY_MANAGEMENT_IMAGE_DATA,
  MARKETING_SALES_KITS_IMAGE_DATA,
  PICK_PACK_IMAGE_DATA,
  PRODUCT_FULFILLMENT_IMAGE_DATA,
} from "../../data/sub-category data/ImageWithCEOData";

// Map for each data-fetching function and corresponding image data
const fetchDataMap: Record<
  string,
  { fetchData: () => Promise<SubCategoryCommonTypes | null>; image: any }
> = {
  "inventory-management": {
    fetchData: fetchInventoryManagementData,
    image: INVENTORY_MANAGEMENT_IMAGE_DATA,
  },
  "marketing-sales-kit": {
    fetchData: fetchMarketingSalesKitsData,
    image: MARKETING_SALES_KITS_IMAGE_DATA,
  },
  "pick-pack": {
    fetchData: fetchPickPackData,
    image: PICK_PACK_IMAGE_DATA,
  },
  "product-fulfillment": {
    fetchData: fetchProductFulfillmentData,
    image: PRODUCT_FULFILLMENT_IMAGE_DATA,
  },
};

export default function FulfillmentServices() {
  const location = useLocation();
  const navigate = useNavigate();
  const [serviceData, setServiceData] = useState<SubCategoryCommonTypes | null>(
    null
  );

  const serviceKey = useMemo(
    () => location.pathname.split("/").pop()?.toLowerCase(),
    [location.pathname]
  );

  const serviceConfig = useMemo(
    () => (serviceKey ? fetchDataMap[serviceKey] : null),
    [serviceKey]
  );

  const getServiceData = useCallback(async () => {
    if (serviceConfig) {
      try {
        const data = await serviceConfig.fetchData();
        setServiceData(data);
      } catch (error) {
        console.error(`Error fetching data for service: ${serviceKey}`, error);
      }
    }
  }, [serviceConfig, serviceKey]);

  useEffect(() => {
    getServiceData();
  }, [getServiceData]);

  const memoizedData = useMemo(() => serviceData, [serviceData]);

  return (
    <div>
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div>
        {serviceConfig && (
          <ImageWithSEO
            src={serviceConfig.image.src}
            alt={serviceConfig.image.alt}
            title={serviceConfig.image.title}
            geoData={serviceConfig.image.geoData}
            loading="eager"
          />
        )}
        <TitleAndButtonContainer>
          <FullScreenTitle>
            {memoizedData?.one?.title || "Default Title"}
          </FullScreenTitle>
          <GlobalMainContent>
            {memoizedData?.one?.content || "Content unavailable."}
          </GlobalMainContent>
          <FullScreenButton onClick={() => navigate("/request-quote")}>
            {memoizedData?.one?.button || "Request a Quote"}
          </FullScreenButton>
        </TitleAndButtonContainer>
      </FullBackgroundContainerZERO>

      <GlobalContainerColumn>
        <GlobalTextContainer>
          {memoizedData?.two ? (
            memoizedData.two.map((item, index) => (
              <GlobalPart key={index}>{item}</GlobalPart>
            ))
          ) : (
            <p>Additional information is unavailable.</p>
          )}
        </GlobalTextContainer>
      </GlobalContainerColumn>
    </div>
  );
}
