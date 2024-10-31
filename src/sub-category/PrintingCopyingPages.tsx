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
import { SubCategoryCommonTypes } from "../types/DataTypes";
import {
  fetchBusinessAnnualReportsData,
  fetchBusinessCardsStationeryData,
  fetchNewslettersFlyersRackCardsData,
  fetchPostCardsDirectMailersData,
  fetchPresentationTrainingMaterialsData,
  fetchApparelUniformsData,
  fetchBookPrintingData,
  fetchCardsAndInvitationsData,
  fetchLabelsStickersDecalsData,
  fetchLegalCopyingData,
  fetchPosterPrintingData,
} from "../data/sub-category data/AllSubCategoryData";
import {
  BUSINESS_ANNUAL_REPORTS_IMAGE,
  BUSINESS_CARDS_STATIONERY_IMAGE,
  NEWSLETTERS_FLYERS_RACK_CARDS_IMAGE,
  POSTCARDS_DIRECT_MAILERS_IMAGE,
  PRESENTATION_TRAINING_MATERIALS_IMAGE,
  APPAREL_UNIFORMS_IMAGE,
  BOOK_PRINTING_IMAGE,
  CARDS_INVITATIONS_IMAGE,
  LABELS_STICKERS_DECALS_IMAGE,
  LEGAL_COPYING_IMAGE,
  POSTER_PRINTING_IMAGE,
} from "../data/sub-category data/ImageWithCEOData";

// Map for fetching functions and corresponding image data
const serviceDataMap = {
  "business-annual-reports": {
    fetchData: fetchBusinessAnnualReportsData,
    image: BUSINESS_ANNUAL_REPORTS_IMAGE,
  },
  "business-cards-stationery": {
    fetchData: fetchBusinessCardsStationeryData,
    image: BUSINESS_CARDS_STATIONERY_IMAGE,
  },
  "newsletters-flyers-rack-cards": {
    fetchData: fetchNewslettersFlyersRackCardsData,
    image: NEWSLETTERS_FLYERS_RACK_CARDS_IMAGE,
  },
  "post-cards-direct-mailers": {
    fetchData: fetchPostCardsDirectMailersData,
    image: POSTCARDS_DIRECT_MAILERS_IMAGE,
  },
  "presentation-training-materials": {
    fetchData: fetchPresentationTrainingMaterialsData,
    image: PRESENTATION_TRAINING_MATERIALS_IMAGE,
  },
  "apparel-uniforms": {
    fetchData: fetchApparelUniformsData,
    image: APPAREL_UNIFORMS_IMAGE,
  },
  "book-printing": {
    fetchData: fetchBookPrintingData,
    image: BOOK_PRINTING_IMAGE,
  },
  "cards-invitations": {
    fetchData: fetchCardsAndInvitationsData,
    image: CARDS_INVITATIONS_IMAGE,
  },
  "labels-stickers-decals": {
    fetchData: fetchLabelsStickersDecalsData,
    image: LABELS_STICKERS_DECALS_IMAGE,
  },
  "legal-printing": {
    fetchData: fetchLegalCopyingData,
    image: LEGAL_COPYING_IMAGE,
  },
  "poster-printing": {
    fetchData: fetchPosterPrintingData,
    image: POSTER_PRINTING_IMAGE,
  },
};

// Define type for valid keys in serviceDataMap
type ServiceKeyType = keyof typeof serviceDataMap;

export default function PrintingCopyingPages() {
  const location = useLocation();
  const navigate = useNavigate();
  const [serviceData, setServiceData] = useState<SubCategoryCommonTypes | null>(
    null
  );

  // Extract the service key from the URL and cast to ServiceKeyType
  const serviceKey = useMemo(
    () => location.pathname.split("/").pop()?.toLowerCase() as ServiceKeyType,
    [location.pathname]
  );

  const serviceConfig = useMemo(
    () => (serviceKey ? serviceDataMap[serviceKey] : null),
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
