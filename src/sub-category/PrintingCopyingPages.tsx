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

// Map for fetching functions, image data, and SEO metadata
const serviceDataMap: Record<
  string,
  {
    fetchData: () => Promise<SubCategoryCommonTypes | null>;
    image: any;
    title: string; // SEO title
    description: string; // SEO description
    canonical: string;
  }
> = {
  "business-annual-reports": {
    fetchData: fetchBusinessAnnualReportsData,
    image: BUSINESS_ANNUAL_REPORTS_IMAGE,
    title: "Business Annual Reports | MSE Printing",
    description:
      "Professional business annual report printing services by MSE Printing for comprehensive, detailed reports.",
    canonical:
      "https://www.mseprinting.com/printing-copying/business-annual-reports",
  },
  "business-cards-stationery": {
    fetchData: fetchBusinessCardsStationeryData,
    image: BUSINESS_CARDS_STATIONERY_IMAGE,
    title: "Business Cards & Stationery | MSE Printing",
    description:
      "Create a lasting impression with custom business cards and stationery by MSE Printing.",
    canonical:
      "https://www.mseprinting.com/printing-copying/Business-cards-stationery",
  },
  "newsletters-flyers-rack-cards": {
    fetchData: fetchNewslettersFlyersRackCardsData,
    image: NEWSLETTERS_FLYERS_RACK_CARDS_IMAGE,
    title: "Newsletters, Flyers & Rack Cards | MSE Printing",
    description:
      "Engage your audience with high-quality newsletters, flyers, and rack cards from MSE Printing.",
    canonical:
      "https://www.mseprinting.com/printing-copying/newsletters-flyers-rack-cards",
  },
  "post-cards-direct-mailers": {
    fetchData: fetchPostCardsDirectMailersData,
    image: POSTCARDS_DIRECT_MAILERS_IMAGE,
    title: "Post Cards & Direct Mailers | MSE Printing",
    description:
      "Reach out with impactful post cards and direct mailers designed and printed by MSE Printing.",
    canonical:
      "https://www.mseprinting.com/printing-copying/post-cards-direct-mailers",
  },
  "presentation-training-materials": {
    fetchData: fetchPresentationTrainingMaterialsData,
    image: PRESENTATION_TRAINING_MATERIALS_IMAGE,
    title: "Presentation & Training Materials | MSE Printing",
    description:
      "Ensure professional presentations with training materials crafted by MSE Printing.",
    canonical:
      "https://www.mseprinting.com/printing-copying/presentation-training-materials",
  },
  "apparel-uniforms": {
    fetchData: fetchApparelUniformsData,
    image: APPAREL_UNIFORMS_IMAGE,
    title: "Apparel & Uniforms | MSE Printing",
    description:
      "Customize apparel and uniforms for your team with MSE Printing's printing solutions.",
    canonical: "https://www.mseprinting.com/printing-copying/apparel-uniforms",
  },
  "book-printing": {
    fetchData: fetchBookPrintingData,
    image: BOOK_PRINTING_IMAGE,
    title: "Book Printing | MSE Printing",
    description:
      "Publish your book with MSE Printing’s high-quality book printing services.",
    canonical: "https://www.mseprinting.com/printing-copying/book-printing",
  },
  "cards-invitations": {
    fetchData: fetchCardsAndInvitationsData,
    image: CARDS_INVITATIONS_IMAGE,
    title: "Cards & Invitations | MSE Printing",
    description:
      "Create memorable cards and invitations for any occasion with MSE Printing.",
    canonical: "https://www.mseprinting.com/printing-copying/cards-invitations",
  },
  "labels-stickers-decals": {
    fetchData: fetchLabelsStickersDecalsData,
    image: LABELS_STICKERS_DECALS_IMAGE,
    title: "Labels, Stickers & Decals | MSE Printing",
    description:
      "Brand your products with custom labels, stickers, and decals by MSE Printing.",
    canonical:
      "https://www.mseprinting.com/printing-copying/labels-stickers-decals",
  },
  "legal-printing": {
    fetchData: fetchLegalCopyingData,
    image: LEGAL_COPYING_IMAGE,
    title: "Legal Printing | MSE Printing",
    description:
      "Reliable legal printing and copying services by MSE Printing for all your documentation needs.",
    canonical: "https://www.mseprinting.com/printing-copying/legal-printing",
  },
  "poster-printing": {
    fetchData: fetchPosterPrintingData,
    image: POSTER_PRINTING_IMAGE,
    title: "Poster Printing | MSE Printing",
    description:
      "Print vibrant posters for events, promotions, and more with MSE Printing.",
    canonical: "https://www.mseprinting.com/printing-copying/poster-printing",
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
      {/* HelmetComponent for SEO */}
      {serviceConfig && (
        <HelmetComponent
          title={serviceConfig.title}
          description={serviceConfig.description}
          canonical={serviceConfig.canonical}
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
