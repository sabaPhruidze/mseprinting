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
  fetchAdvancedMailingServicesData,
  fetchEveryDoorDirectMailData,
  fetchKittingAndFulfillmentData,
  fetchListManagementServicesData,
  fetchStandartDirectMailData,
  fetchTargetedDirectMailData,
} from "../../data/sub-category data/AllSubCategoryData";
import {
  ADVANCED_MAILING_SERVICES_IMAGE,
  EVERY_DOOR_DIRECT_MAIL_IMAGE,
  KITTING_FULLFILLMENT_IMAGE,
  LIST_MANAGEMENT_SERVICES_IMAGE,
  STANDARD_DIRECT_MAIL_IMAGE,
  TARGETED_DIRECT_MAIL_IMAGE,
} from "../../data/sub-category data/ImageWithCEOData";

// Map of each data-fetching function and corresponding image
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
  }
> = {
  "advanced-mailing-services": {
    fetchData: fetchAdvancedMailingServicesData,
    image: ADVANCED_MAILING_SERVICES_IMAGE,
  },
  "every-door-direct-mail": {
    fetchData: fetchEveryDoorDirectMailData,
    image: EVERY_DOOR_DIRECT_MAIL_IMAGE,
  },
  "kitting-and-fulfillment": {
    fetchData: fetchKittingAndFulfillmentData,
    image: KITTING_FULLFILLMENT_IMAGE,
  },
  "list-management-services": {
    fetchData: fetchListManagementServicesData,
    image: LIST_MANAGEMENT_SERVICES_IMAGE,
  },
  "standard-direct-mail": {
    fetchData: fetchStandartDirectMailData,
    image: STANDARD_DIRECT_MAIL_IMAGE,
  },
  "targeted-direct-mail": {
    fetchData: fetchTargetedDirectMailData,
    image: TARGETED_DIRECT_MAIL_IMAGE,
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
