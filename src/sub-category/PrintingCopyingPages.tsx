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
  FloatedImageContainer,
} from "../style/GlobalStyle";
import ImageWithSEO from "../importantparts/ImageWithCEO";
import HelmetComponent from "../importantparts/Helmet";
import { SubCategoryCommonTypes } from "../types/DataTypes";

// Fetch data imports
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

// Main image imports
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
  APPAREL_UNIFORMS_RIGHT_IMAGE,
  BOOK_PRINTING_RIGHT_IMAGE,
  BUSINESS_ANNUAL_REPORTS_RIGHT_IMAGE,
  BUSINESS_CARDS_STATIONERY_RIGHT_IMAGE,
  CARDS_INVITATIONS_RIGHT_IMAGE,
  LABELS_STICKERS_DECALS_RIGHT_IMAGE,
  LEGAL_COPYING_RIGHT_IMAGE,
  NEWSLETTERS_FLYERS_RACK_CARDS_RIGHT_IMAGE,
  POSTCARDS_DIRECT_MAILERS_RIGHT_IMAGE,
  POSTER_PRINTING_RIGHT_IMAGE,
  PRESENTATION_TRAINING_MATERIALS_RIGHT_IMAGE,
} from "../data/sub-category data/ImageWithCEOData";

// Define serviceDataMap
const serviceDataMap: Record<
  string,
  {
    fetchData: () => Promise<SubCategoryCommonTypes | null>;
    image: any;
    imageRight?: any;
    title: string;
    description: string;
  }
> = {
  "business-annual-reports": {
    fetchData: fetchBusinessAnnualReportsData,
    image: BUSINESS_ANNUAL_REPORTS_IMAGE,
    imageRight: BUSINESS_ANNUAL_REPORTS_RIGHT_IMAGE,
    title: "Business Annual Reports | MSE Printing",
    description:
      "Professional business annual report printing services by MSE Printing for comprehensive, detailed reports.",
  },
  "business-cards-stationery": {
    fetchData: fetchBusinessCardsStationeryData,
    image: BUSINESS_CARDS_STATIONERY_IMAGE,
    imageRight: BUSINESS_CARDS_STATIONERY_RIGHT_IMAGE,
    title: "Business Cards & Stationery | MSE Printing",
    description:
      "Create a lasting impression with custom business cards and stationery by MSE Printing.",
  },
  "newsletters-flyers-rack-cards": {
    fetchData: fetchNewslettersFlyersRackCardsData,
    image: NEWSLETTERS_FLYERS_RACK_CARDS_IMAGE,
    imageRight: NEWSLETTERS_FLYERS_RACK_CARDS_RIGHT_IMAGE,
    title: "Newsletters, Flyers & Rack Cards | MSE Printing",
    description:
      "Engage your audience with high-quality newsletters, flyers, and rack cards from MSE Printing.",
  },
  "post-cards-direct-mailers": {
    fetchData: fetchPostCardsDirectMailersData,
    image: POSTCARDS_DIRECT_MAILERS_IMAGE,
    imageRight: POSTCARDS_DIRECT_MAILERS_RIGHT_IMAGE,
    title: "Post Cards & Direct Mailers | MSE Printing",
    description:
      "Reach out with impactful post cards and direct mailers designed and printed by MSE Printing.",
  },
  "presentation-training-materials": {
    fetchData: fetchPresentationTrainingMaterialsData,
    image: PRESENTATION_TRAINING_MATERIALS_IMAGE,
    imageRight: PRESENTATION_TRAINING_MATERIALS_RIGHT_IMAGE,
    title: "Presentation & Training Materials | MSE Printing",
    description:
      "Ensure professional presentations with training materials crafted by MSE Printing.",
  },
  "apparel-uniforms": {
    fetchData: fetchApparelUniformsData,
    image: APPAREL_UNIFORMS_IMAGE,
    imageRight: APPAREL_UNIFORMS_RIGHT_IMAGE,
    title: "Apparel & Uniforms | MSE Printing",
    description:
      "Customize apparel and uniforms for your team with MSE Printing's printing solutions.",
  },
  "book-printing": {
    fetchData: fetchBookPrintingData,
    image: BOOK_PRINTING_IMAGE,
    imageRight: BOOK_PRINTING_RIGHT_IMAGE,
    title: "Book Printing | MSE Printing",
    description:
      "Publish your book with MSE Printing’s high-quality book printing services.",
  },
  "cards-invitations": {
    fetchData: fetchCardsAndInvitationsData,
    image: CARDS_INVITATIONS_IMAGE,
    imageRight: CARDS_INVITATIONS_RIGHT_IMAGE,
    title: "Cards & Invitations | MSE Printing",
    description:
      "Create memorable cards and invitations for any occasion with MSE Printing.",
  },
  "labels-stickers-decals": {
    fetchData: fetchLabelsStickersDecalsData,
    image: LABELS_STICKERS_DECALS_IMAGE,
    imageRight: LABELS_STICKERS_DECALS_RIGHT_IMAGE,
    title: "Labels, Stickers & Decals | MSE Printing",
    description:
      "Brand your products with custom labels, stickers, and decals by MSE Printing.",
  },
  "legal-printing": {
    fetchData: fetchLegalCopyingData,
    image: LEGAL_COPYING_IMAGE,
    imageRight: LEGAL_COPYING_RIGHT_IMAGE,
    title: "Legal Printing | MSE Printing",
    description:
      "Reliable legal printing and copying services by MSE Printing for all your documentation needs.",
  },
  "poster-printing": {
    fetchData: fetchPosterPrintingData,
    image: POSTER_PRINTING_IMAGE,
    imageRight: POSTER_PRINTING_RIGHT_IMAGE,
    title: "Poster Printing | MSE Printing",
    description:
      "Print vibrant posters for events, promotions, and more with MSE Printing.",
  },
};

// A styled component for the right-floating image
type ServiceKeyType = keyof typeof serviceDataMap;

export default function PrintingCopyingPages() {
  const location = useLocation();
  const navigate = useNavigate();
  const [serviceData, setServiceData] = useState<SubCategoryCommonTypes | null>(
    null
  );

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
          {serviceConfig?.imageRight && (
            <FloatedImageContainer>
              <ImageWithSEO
                src={serviceConfig.imageRight.src}
                alt={serviceConfig.imageRight.alt}
                title={serviceConfig.imageRight.title}
                geoData={serviceConfig.imageRight.geoData}
                loading="lazy"
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
