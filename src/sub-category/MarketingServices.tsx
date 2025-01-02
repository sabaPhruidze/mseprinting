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

// Import both main and right-side images
import {
  CAMPAINGS_CONSULTATION_IMAGE_DATA,
  SOCIAL_MEDIA_IMAGE_DATA,
  VIDEO_PRODUCTION_IMAGE_DATA,
  WEBSITE_DESIGN_IMAGE_DATA,
  // Right-side images
  CAMPAINGS_CONSULTATION_IMAGE_RIGHT_IMAGE,
  SOCIAL_MEDIA_IMAGE_RIGHT_IMAGE,
  VIDEO_PRODUCTION_IMAGE_RIGHT_IMAGE,
  WEBSITE_DESIGN_IMAGE_RIGHT_IMAGE,
} from "../data/sub-category data/ImageWithCEOData";

import {
  fetchCampaignsConsultationData,
  fetchSocialMediaData,
  fetchVideoProductionData,
  fetchWebsiteDesignData,
} from "../data/sub-category data/AllSubCategoryData";

// Map for each data-fetching function, image, right-side image, and SEO metadata
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
    title: string; // SEO title for each service
    description: string; // SEO description for each service
  }
> = {
  "campaigns-consultation": {
    fetchData: fetchCampaignsConsultationData,
    image: CAMPAINGS_CONSULTATION_IMAGE_DATA,
    imageRight: CAMPAINGS_CONSULTATION_IMAGE_RIGHT_IMAGE, // Right-side image
    title: "Campaigns & Consultation | MSE Printing",
    description:
      "Get expert consultation for your marketing campaigns with MSE Printing's Campaigns & Consultation services.",
  },
  "social-media": {
    fetchData: fetchSocialMediaData,
    image: SOCIAL_MEDIA_IMAGE_DATA,
    imageRight: SOCIAL_MEDIA_IMAGE_RIGHT_IMAGE, // Right-side image
    title: "Social Media Marketing | MSE Printing",
    description:
      "Elevate your brand's presence with MSE Printing's Social Media Marketing services, tailored for impactful engagement.",
  },
  "video-production": {
    fetchData: fetchVideoProductionData,
    image: VIDEO_PRODUCTION_IMAGE_DATA,
    imageRight: VIDEO_PRODUCTION_IMAGE_RIGHT_IMAGE, // Right-side image
    title: "Video Production | MSE Printing",
    description:
      "Bring your brand story to life with MSE Printing's professional Video Production services for high-quality visual content.",
  },
  "website-design": {
    fetchData: fetchWebsiteDesignData,
    image: WEBSITE_DESIGN_IMAGE_DATA,
    imageRight: WEBSITE_DESIGN_IMAGE_RIGHT_IMAGE, // Right-side image
    title: "Website Design | MSE Printing",
    description:
      "Transform your online presence with MSE Printing's Website Design services for a seamless and engaging user experience.",
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
