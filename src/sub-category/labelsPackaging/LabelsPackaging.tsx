import { useEffect, useState, useMemo } from "react";
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
import { ADA_WAYFINDING_SIGNS_IMAGE } from "../../data/sub-category data/ImageWithCEOData";
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

// Map of each data-fetching function based on the service key
const fetchDataMap: {
  [key: string]: () => Promise<SubCategoryCommonTypes | null>;
} = {
  "custom-packaging": fetchCustomPackagingData,
  "premium-private-labels": fetchPremiumPrivateLabelsData,
  "product-promotional-labels": fetchProductPromotionalLabelsData,
  "qr-codes-no-touch-options": fetchQRCodesNoTouchOptionsData,
  "safety-labels": fetchSafetyLabelsData,
  "short-run-packaging": fetchShortRunPackagingData,
  "stickers-decals": fetchStickersDecalsData,
};

export default function LabelsPackagingMain() {
  const location = useLocation();
  const navigate = useNavigate();
  const [serviceData, setServiceData] = useState<SubCategoryCommonTypes | null>(
    null
  );

  useEffect(() => {
    const serviceKey = location.pathname.split("/").pop()?.toLowerCase();
    const fetchData = serviceKey ? fetchDataMap[serviceKey] : null;

    const getServiceData = async () => {
      if (fetchData) {
        try {
          const data = await fetchData();
          if (data) setServiceData(data);
        } catch (error) {
          console.error(
            `Error fetching data for service: ${serviceKey}`,
            error
          );
        }
      }
    };

    getServiceData();
  }, [location.pathname]);

  const memoizedData = useMemo(() => serviceData, [serviceData]);

  return (
    <div>
      <FullBackgroundContainerZERO>
        <div className="black-overlay"></div>
        <ImageWithSEO
          src={ADA_WAYFINDING_SIGNS_IMAGE.src}
          alt={ADA_WAYFINDING_SIGNS_IMAGE.alt}
          title={ADA_WAYFINDING_SIGNS_IMAGE.title}
          geoData={ADA_WAYFINDING_SIGNS_IMAGE.geoData}
          loading="eager"
        />
        <TitleAndButtonContainer>
          <FullScreenTitle>{memoizedData?.one?.title}</FullScreenTitle>
          <GlobalMainContent>{memoizedData?.one?.content}</GlobalMainContent>
          <FullScreenButton onClick={() => navigate("/request-quote")}>
            {memoizedData?.one?.button}
          </FullScreenButton>
        </TitleAndButtonContainer>
      </FullBackgroundContainerZERO>

      <GlobalContainerColumn>
        <GlobalTextContainer>
          {memoizedData?.two?.map((item, index) => (
            <GlobalPart key={index}>{item}</GlobalPart>
          ))}
        </GlobalTextContainer>
      </GlobalContainerColumn>
    </div>
  );
}
