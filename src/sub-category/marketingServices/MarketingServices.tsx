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
  fetchCampaignsConsultationData,
  fetchSocialMediaData,
  fetchVideoProductionData,
  fetchWebsiteDesignData,
} from "../../data/sub-category data/AllSubCategoryData";

// Map for each data-fetching function based on service key
const fetchDataMap: {
  [key: string]: () => Promise<SubCategoryCommonTypes | null>;
} = {
  "campaigns-consultation": fetchCampaignsConsultationData,
  "social-media": fetchSocialMediaData,
  "video-production": fetchVideoProductionData,
  "website-design": fetchWebsiteDesignData,
};

export default function MarketingServices() {
  const location = useLocation();
  const [serviceData, setServiceData] = useState<SubCategoryCommonTypes | null>(
    null
  );
  const navigate = useNavigate();

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
