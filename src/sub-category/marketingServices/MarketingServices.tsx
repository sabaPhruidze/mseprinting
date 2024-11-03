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
  fetchCampaignsConsultationData,
  fetchSocialMediaData,
  fetchVideoProductionData,
  fetchWebsiteDesignData,
} from "../../data/sub-category data/AllSubCategoryData";
import {
  CAMPAINGS_CONSULTATION_IMAGE_DATA,
  SOCIAL_MEDIA_IMAGE_DATA,
  VIDEO_PRODUCTION_IMAGE_DATA,
  WEBSITE_DESIGN_IMAGE_DATA,
} from "../../data/sub-category data/ImageWithCEOData";

// Map for each data-fetching function and corresponding image data
const fetchDataMap: Record<
  string,
  { fetchData: () => Promise<SubCategoryCommonTypes | null>; image: any }
> = {
  "campaigns-consultation": {
    fetchData: fetchCampaignsConsultationData,
    image: CAMPAINGS_CONSULTATION_IMAGE_DATA,
  },
  "social-media": {
    fetchData: fetchSocialMediaData,
    image: SOCIAL_MEDIA_IMAGE_DATA,
  },
  "video-production": {
    fetchData: fetchVideoProductionData,
    image: VIDEO_PRODUCTION_IMAGE_DATA,
  },
  "website-design": {
    fetchData: fetchWebsiteDesignData,
    image: WEBSITE_DESIGN_IMAGE_DATA,
  },
};

export default function MarketingServices() {
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
