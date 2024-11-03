import { useEffect, useState, useMemo, useCallback } from "react";
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
  fetchCustomPackagingData,
  fetchPremiumPrivateLabelsData,
  fetchProductPromotionalLabelsData,
  fetchQRCodesNoTouchOptionsData,
  fetchSafetyLabelsData,
  fetchShortRunPackagingData,
  fetchStickersDecalsData,
} from "../../data/sub-category data/AllSubCategoryData";
import {
  CUSTOM_PACKAGING_IMAGE_DATA,
  PREMIUM_PRIVATE_LABELS_IMAGE_DATA,
  PRODUCT_PROMOTIONAL_IMAGE_DATA,
  QR_CODE_NO_TOUCH_OPTIONS_IMAGE_DATA,
  SAFETY_LABELS_IMAGE_DATA,
  SHORT_RUN_PACKAGING_IMAGE_DATA,
  STICKERS_DECALS_IMAGE_DATA,
} from "../../data/sub-category data/ImageWithCEOData";

// Map of each data-fetching function and corresponding image data
const fetchDataMap: Record<
  string,
  { fetchData: () => Promise<SubCategoryCommonTypes | null>; image: any }
> = {
  "custom-packaging": {
    fetchData: fetchCustomPackagingData,
    image: CUSTOM_PACKAGING_IMAGE_DATA,
  },
  "premium-private-labels": {
    fetchData: fetchPremiumPrivateLabelsData,
    image: PREMIUM_PRIVATE_LABELS_IMAGE_DATA,
  },
  "product-promotional-labels": {
    fetchData: fetchProductPromotionalLabelsData,
    image: PRODUCT_PROMOTIONAL_IMAGE_DATA,
  },
  "qr-codes-no-touch-options": {
    fetchData: fetchQRCodesNoTouchOptionsData,
    image: QR_CODE_NO_TOUCH_OPTIONS_IMAGE_DATA,
  },
  "safety-labels": {
    fetchData: fetchSafetyLabelsData,
    image: SAFETY_LABELS_IMAGE_DATA,
  },
  "short-run-packaging": {
    fetchData: fetchShortRunPackagingData,
    image: SHORT_RUN_PACKAGING_IMAGE_DATA,
  },
  "stickers-decals": {
    fetchData: fetchStickersDecalsData,
    image: STICKERS_DECALS_IMAGE_DATA,
  },
};

export default function LabelsPackagingMain() {
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
    if (serviceConfig) {
      getServiceData();
    }
  }, [getServiceData, serviceConfig]);

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
          <FullScreenTitle>{memoizedData?.one?.title || ""}</FullScreenTitle>
          <GlobalMainContent>
            {memoizedData?.one?.content || ""}
          </GlobalMainContent>
          <FullScreenButton onClick={() => navigate("/request-quote")}>
            {memoizedData?.one?.button || ""}
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
            <p></p>
          )}
        </GlobalTextContainer>
      </GlobalContainerColumn>
    </div>
  );
}
