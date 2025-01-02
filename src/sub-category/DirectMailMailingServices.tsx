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
  FloatedImageContainer, // Make sure this is available in GlobalStyle
} from "../style/GlobalStyle";
import ImageWithSEO from "../importantparts/ImageWithCEO";
import HelmetComponent from "../importantparts/Helmet"; // Import HelmetComponent for SEO
import { SubCategoryCommonTypes } from "../types/DataTypes";
import {
  fetchAdvancedMailingServicesData,
  fetchEveryDoorDirectMailData,
  fetchKittingAndFulfillmentData,
  fetchListManagementServicesData,
  fetchStandartDirectMailData,
  fetchTargetedDirectMailData,
} from "../data/sub-category data/AllSubCategoryData";
import {
  ADVANCED_MAILING_SERVICES_IMAGE,
  EVERY_DOOR_DIRECT_MAIL_IMAGE,
  KITTING_FULLFILLMENT_IMAGE,
  LIST_MANAGEMENT_SERVICES_IMAGE,
  STANDARD_DIRECT_MAIL_IMAGE,
  TARGETED_DIRECT_MAIL_IMAGE,
  // Import the right-side images
  ADVANCED_MAILING_SERVICES_RIGHT_IMAGE,
  EVERY_DOOR_DIRECT_MAIL_RIGHT_IMAGE,
  KITTING_FULLFILMENT_RIGHT_IMAGE,
  LIST_MANAGEMENT_SERVICES_RIGHT_IMAGE,
  STANDARD_DIRECT_MAIL_RIGHT_IMAGE,
  TARGETED_DIRECT_MAIL_RIGHT_IMAGE,
} from "../data/sub-category data/ImageWithCEOData";

// Map of each data-fetching function and corresponding images
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
  "advanced-mailing-services": {
    fetchData: fetchAdvancedMailingServicesData,
    image: ADVANCED_MAILING_SERVICES_IMAGE,
    imageRight: ADVANCED_MAILING_SERVICES_RIGHT_IMAGE,
    title: "Advanced Mailing Services | MSE Printing",
    description:
      "Discover MSE Printing's Advanced Mailing Services for tailored marketing solutions. Professional, reliable, and effective mailing strategies.",
  },
  "every-door-direct-mail": {
    fetchData: fetchEveryDoorDirectMailData,
    image: EVERY_DOOR_DIRECT_MAIL_IMAGE,
    imageRight: EVERY_DOOR_DIRECT_MAIL_RIGHT_IMAGE,
    title: "Every Door Direct Mail | MSE Printing",
    description:
      "Reach every door with MSE Printing's Direct Mail services. A cost-effective way to connect with your local audience.",
  },
  "kitting-and-fulfillment": {
    fetchData: fetchKittingAndFulfillmentData,
    image: KITTING_FULLFILLMENT_IMAGE,
    imageRight: KITTING_FULLFILMENT_RIGHT_IMAGE,
    title: "Kitting and Fulfillment | MSE Printing",
    description:
      "Optimize your business logistics with MSE Printing's Kitting and Fulfillment services. Efficient, customized solutions.",
  },
  "list-management-services": {
    fetchData: fetchListManagementServicesData,
    image: LIST_MANAGEMENT_SERVICES_IMAGE,
    imageRight: LIST_MANAGEMENT_SERVICES_RIGHT_IMAGE,
    title: "List Management Services | MSE Printing",
    description:
      "Manage your mailing lists efficiently with MSE Printing's List Management Services. Accurate, targeted, and organized.",
  },
  "standard-direct-mail": {
    fetchData: fetchStandartDirectMailData,
    image: STANDARD_DIRECT_MAIL_IMAGE,
    imageRight: STANDARD_DIRECT_MAIL_RIGHT_IMAGE,
    title: "Standard Direct Mail | MSE Printing",
    description:
      "Send impactful messages with MSE Printing's Standard Direct Mail services. Trusted solutions for effective communication.",
  },
  "targeted-direct-mail": {
    fetchData: fetchTargetedDirectMailData,
    image: TARGETED_DIRECT_MAIL_IMAGE,
    imageRight: TARGETED_DIRECT_MAIL_RIGHT_IMAGE,
    title: "Targeted Direct Mail | MSE Printing",
    description:
      "Deliver personalized messages with MSE Printing's Targeted Direct Mail services. Precise, engaging, and effective marketing.",
  },
};

export default function DirectMailMailingServices() {
  const location = useLocation();
  const navigate = useNavigate();
  const [serviceData, setServiceData] = useState<SubCategoryCommonTypes | null>(
    null
  );

  // Extract the service key from the URL
  const serviceKey = useMemo(
    () => location.pathname.split("/").pop()?.toLowerCase(),
    [location.pathname]
  );

  // Get service configuration based on the current service key
  const serviceConfig = useMemo(
    () => (serviceKey ? fetchDataMap[serviceKey] : null),
    [serviceKey]
  );

  // Fetch data for the current service
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

  // Trigger data fetch on component mount or when serviceConfig changes
  useEffect(() => {
    if (serviceConfig) {
      getServiceData();
    }
  }, [getServiceData, serviceConfig]);

  // Memoize the service data to avoid unnecessary re-renders
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
          {/* Display the right image if available */}
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
