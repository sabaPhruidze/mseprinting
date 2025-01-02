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
  FloatedImageContainer, // <-- Import for right-side images
} from "../style/GlobalStyle";
import ImageWithSEO from "../importantparts/ImageWithCEO";
import HelmetComponent from "../importantparts/Helmet"; // Import HelmetComponent for SEO
import { SubCategoryCommonTypes } from "../types/DataTypes";

// Import main and right-side images
import {
  CUSTOM_PACKAGING_IMAGE_DATA,
  PREMIUM_PRIVATE_LABELS_IMAGE_DATA,
  PRODUCT_PROMOTIONAL_IMAGE_DATA,
  QR_CODE_NO_TOUCH_OPTIONS_IMAGE_DATA,
  SAFETY_LABELS_IMAGE_DATA,
  SHORT_RUN_PACKAGING_IMAGE_DATA,
  STICKERS_DECALS_IMAGE_DATA,
  // Right-side images
  CUSTOM_PACKAGING_IMAGE_RIGHT_IMAGE,
  PREMIUM_PRIVATE_LABELS_IMAGE_RIGHT_IMAGE,
  PRODUCT_PROMOTIONAL_IMAGE_RIGHT_IMAGE,
  QR_CODE_NO_TOUCH_OPTIONS_IMAGE_RIGHT_IMAGE,
  SAFETY_LABELS_IMAGE_RIGHT_IMAGE,
  SHORT_RUN_PACKAGING_IMAGE_RIGHT_IMAGE,
  STICKERS_DECALS_IMAGE_RIGHT_IMAGE,
} from "../data/sub-category data/ImageWithCEOData";

import {
  fetchCustomPackagingData,
  fetchPremiumPrivateLabelsData,
  fetchProductPromotionalLabelsData,
  fetchQRCodesNoTouchOptionsData,
  fetchSafetyLabelsData,
  fetchShortRunPackagingData,
  fetchStickersDecalsData,
} from "../data/sub-category data/AllSubCategoryData";

// Map for each data-fetching function, images, and SEO metadata
const fetchDataMap: Record<
  string,
  {
    fetchData: () => Promise<SubCategoryCommonTypes | null>;
    image: {
      src: string;
      alt: string;
      title: string;
      geoData: { latitude: string; longitude: string; location: string };
    };
    imageRight?: {
      src: string;
      alt: string;
      title: string;
      geoData: { latitude: string; longitude: string; location: string };
    };
    title: string; // SEO title
    description: string; // SEO description
  }
> = {
  "custom-packaging": {
    fetchData: fetchCustomPackagingData,
    image: CUSTOM_PACKAGING_IMAGE_DATA,
    imageRight: CUSTOM_PACKAGING_IMAGE_RIGHT_IMAGE,
    title: "Custom Packaging | MSE Printing",
    description:
      "Create unique, branded packaging solutions with MSE Printing's custom packaging services.",
  },
  "premium-private-labels": {
    fetchData: fetchPremiumPrivateLabelsData,
    image: PREMIUM_PRIVATE_LABELS_IMAGE_DATA,
    imageRight: PREMIUM_PRIVATE_LABELS_IMAGE_RIGHT_IMAGE,
    title: "Premium Private Labels | MSE Printing",
    description:
      "Elevate your brand with premium private labels by MSE Printing, crafted to impress.",
  },
  "product-promotional-labels": {
    fetchData: fetchProductPromotionalLabelsData,
    image: PRODUCT_PROMOTIONAL_IMAGE_DATA,
    imageRight: PRODUCT_PROMOTIONAL_IMAGE_RIGHT_IMAGE,
    title: "Product & Promotional Labels | MSE Printing",
    description:
      "Promote your brand with custom product and promotional labels from MSE Printing.",
  },
  "qr-codes-no-touch-options": {
    fetchData: fetchQRCodesNoTouchOptionsData,
    image: QR_CODE_NO_TOUCH_OPTIONS_IMAGE_DATA,
    imageRight: QR_CODE_NO_TOUCH_OPTIONS_IMAGE_RIGHT_IMAGE,
    title: "QR Codes & No-Touch Options | MSE Printing",
    description:
      "Enhance accessibility with QR codes and no-touch options provided by MSE Printing.",
  },
  "safety-labels": {
    fetchData: fetchSafetyLabelsData,
    image: SAFETY_LABELS_IMAGE_DATA,
    imageRight: SAFETY_LABELS_IMAGE_RIGHT_IMAGE,
    title: "Safety Labels | MSE Printing",
    description:
      "Ensure safety and compliance with custom safety labels from MSE Printing.",
  },
  "short-run-packaging": {
    fetchData: fetchShortRunPackagingData,
    image: SHORT_RUN_PACKAGING_IMAGE_DATA,
    imageRight: SHORT_RUN_PACKAGING_IMAGE_RIGHT_IMAGE,
    title: "Short-Run Packaging | MSE Printing",
    description:
      "Get flexible, small-batch packaging solutions with MSE Printing's short-run packaging services.",
  },
  "stickers-decals": {
    fetchData: fetchStickersDecalsData,
    image: STICKERS_DECALS_IMAGE_DATA,
    imageRight: STICKERS_DECALS_IMAGE_RIGHT_IMAGE,
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
        {/* Main (hero) image */}
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
          {/* Right-side image */}
          {serviceConfig?.imageRight && (
            <FloatedImageContainer>
              <ImageWithSEO
                src={serviceConfig.imageRight.src}
                alt={serviceConfig.imageRight.alt}
                title={serviceConfig.imageRight.title}
                geoData={serviceConfig.imageRight.geoData}
                loading="eager"
              />
            </FloatedImageContainer>
          )}

          {/* Text content */}
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
