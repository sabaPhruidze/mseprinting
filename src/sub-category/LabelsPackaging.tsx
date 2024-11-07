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
} from "../style/GlobalStyle";
import ImageWithSEO from "../importantparts/ImageWithCEO";
import HelmetComponent from "../importantparts/Helmet"; // Import HelmetComponent for SEO
import { SubCategoryCommonTypes } from "../types/DataTypes";
import {
  fetchCustomPackagingData,
  fetchPremiumPrivateLabelsData,
  fetchProductPromotionalLabelsData,
  fetchQRCodesNoTouchOptionsData,
  fetchSafetyLabelsData,
  fetchShortRunPackagingData,
  fetchStickersDecalsData,
} from "../data/sub-category data/AllSubCategoryData";
import {
  CUSTOM_PACKAGING_IMAGE_DATA,
  PREMIUM_PRIVATE_LABELS_IMAGE_DATA,
  PRODUCT_PROMOTIONAL_IMAGE_DATA,
  QR_CODE_NO_TOUCH_OPTIONS_IMAGE_DATA,
  SAFETY_LABELS_IMAGE_DATA,
  SHORT_RUN_PACKAGING_IMAGE_DATA,
  STICKERS_DECALS_IMAGE_DATA,
} from "../data/sub-category data/ImageWithCEOData";

// Map for each data-fetching function, image data, and SEO metadata
const fetchDataMap: Record<
  string,
  {
    fetchData: () => Promise<SubCategoryCommonTypes | null>;
    image: any;
    title: string; // SEO title
    description: string; // SEO description
  }
> = {
  "custom-packaging": {
    fetchData: fetchCustomPackagingData,
    image: CUSTOM_PACKAGING_IMAGE_DATA,
    title: "Custom Packaging | MSE Printing",
    description:
      "Create unique, branded packaging solutions with MSE Printing's custom packaging services.",
  },
  "premium-private-labels": {
    fetchData: fetchPremiumPrivateLabelsData,
    image: PREMIUM_PRIVATE_LABELS_IMAGE_DATA,
    title: "Premium Private Labels | MSE Printing",
    description:
      "Elevate your brand with premium private labels by MSE Printing, crafted to impress.",
  },
  "product-promotional-labels": {
    fetchData: fetchProductPromotionalLabelsData,
    image: PRODUCT_PROMOTIONAL_IMAGE_DATA,
    title: "Product & Promotional Labels | MSE Printing",
    description:
      "Promote your brand with custom product and promotional labels from MSE Printing.",
  },
  "qr-codes-no-touch-options": {
    fetchData: fetchQRCodesNoTouchOptionsData,
    image: QR_CODE_NO_TOUCH_OPTIONS_IMAGE_DATA,
    title: "QR Codes & No-Touch Options | MSE Printing",
    description:
      "Enhance accessibility with QR codes and no-touch options provided by MSE Printing.",
  },
  "safety-labels": {
    fetchData: fetchSafetyLabelsData,
    image: SAFETY_LABELS_IMAGE_DATA,
    title: "Safety Labels | MSE Printing",
    description:
      "Ensure safety and compliance with custom safety labels from MSE Printing.",
  },
  "short-run-packaging": {
    fetchData: fetchShortRunPackagingData,
    image: SHORT_RUN_PACKAGING_IMAGE_DATA,
    title: "Short-Run Packaging | MSE Printing",
    description:
      "Get flexible, small-batch packaging solutions with MSE Printing's short-run packaging services.",
  },
  "stickers-decals": {
    fetchData: fetchStickersDecalsData,
    image: STICKERS_DECALS_IMAGE_DATA,
    title: "Stickers & Decals | MSE Printing",
    description:
      "Brand your products and spaces with custom stickers and decals by MSE Printing.",
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
      {/* HelmetComponent for SEO */}
      {serviceConfig && (
        <HelmetComponent
          title={serviceConfig.title}
          description={serviceConfig.description}
        />
      )}

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
            <p>Additional information is unavailable.</p>
          )}
        </GlobalTextContainer>
      </GlobalContainerColumn>
    </div>
  );
}
