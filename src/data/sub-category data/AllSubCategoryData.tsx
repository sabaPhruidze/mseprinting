import { GeneralizedFetch } from "../../importantparts/GeneralizedFetch";
import {
  DigitalPrintingDocument,
  PrintingCopyingDocument,
  CommonDocument,
  CommonDocumentWAS,
  BusinessFormsType,
  LabelsPackagingDocument,
  SearchResultDocument,
  SubCategoryCommonTypes,
  AboutUsDocument,
  ProductServicesDocument,
  ResourcesDocument,
} from "../../types/DataTypes";

// Helper function for fetching data
const fetchData = async <T,>(
  category: string,
  type: string
): Promise<T | null> => {
  try {
    return await GeneralizedFetch<T>(category, type);
  } catch (error) {
    console.error(`Error fetching data for ${type}:`, error);
    return null;
  }
};

// special
export const fetchSearchEngineData = async (): Promise<
  SearchResultDocument[] | null
> => {
  try {
    const data = await GeneralizedFetch<any>("SearchEngine", "Search");
    if (data && Array.isArray(data.List)) {
      return data.List;
    } else {
      console.error("Fetched data is not an array:", data);
      return null;
    }
  } catch (error) {
    console.error("Error fetching search engine data:", error);
    return null;
  }
};

// subCategories
export const fetchDigitalPrintingData = () =>
  fetchData<DigitalPrintingDocument>("sub-category", "DigitalPrinting");
export const fetchCopyPrintingData = () =>
  fetchData<PrintingCopyingDocument>("sub-category", "PrintingCopying");
export const fetchDirectMailingData = () =>
  fetchData<CommonDocument>("sub-category", "DirectMail");
export const fetchSignsData = () =>
  fetchData<CommonDocument>("sub-category", "Signs");
export const fetchOnlinePortalData = () =>
  fetchData<CommonDocument>("sub-category", "OrderingPortals");

// cards pages
export const fetchBannersPostersData = () =>
  fetchData<CommonDocumentWAS>("CardsPages", "BannersPosters");
export const fetchBrochuresCollateralData = () =>
  fetchData<CommonDocumentWAS>("CardsPages", "BrochuresCollateral");
export const fetchBusinessFormsData = () =>
  fetchData<BusinessFormsType>("CardsPages", "BusinessForms");
export const fetchMKBookletsData = () =>
  fetchData<CommonDocumentWAS>("CardsPages", "MKBooklets");
export const fetchLabelsPackagingData = () =>
  fetchData<LabelsPackagingDocument>("CardsPages", "LabelsPackaging");
export const fetchBusinessAnnualReportsData = () =>
  fetchData<CommonDocumentWAS>("printingCopying", "BusinessAnnualReports");
export const fetchBusinessCardsStationeryData = () =>
  fetchData<CommonDocumentWAS>("printingCopying", "BusinessCardsStationery");
export const fetchNewslettersFlyersRackCardsData = () =>
  fetchData<CommonDocumentWAS>("printingCopying", "NewslettersFlyersRackCards");
export const fetchPostCardsDirectMailersData = () =>
  fetchData<CommonDocumentWAS>("printingCopying", "PostCardsDirectMailers");
export const fetchPresentationTrainingMaterialsData = () =>
  fetchData<CommonDocumentWAS>(
    "printingCopying",
    "PresentationTrainingMaterials"
  );
export const fetchApparelUniformsData = () =>
  fetchData<CommonDocumentWAS>("CardsPages", "ApparelUniforms");
export const fetchBookPrintingData = () =>
  fetchData<CommonDocumentWAS>("CardsPages", "BookPrinting");
export const fetchCardsAndInvitationsData = () =>
  fetchData<CommonDocumentWAS>("CardsPages", "CardsAndInvitations");
export const fetchLabelsStickersDecalsData = () =>
  fetchData<CommonDocumentWAS>("CardsPages", "LabelsStickersDecals");
export const fetchLegalCopyingData = () =>
  fetchData<CommonDocumentWAS>("CardsPages", "LegalCopying");
export const fetchPosterPrintingData = () =>
  fetchData<CommonDocumentWAS>("CardsPages", "PosterPrinting");

// Direct Mail Mailing Services
export const fetchAdvancedMailingServicesData = () =>
  fetchData<SubCategoryCommonTypes>(
    "DirectMailMaillingServices",
    "AdvancedMailingServices"
  );
export const fetchEveryDoorDirectMailData = () =>
  fetchData<SubCategoryCommonTypes>(
    "DirectMailMaillingServices",
    "EveryDoorDirectMail"
  );
export const fetchKittingAndFulfillmentData = () =>
  fetchData<SubCategoryCommonTypes>(
    "DirectMailMaillingServices",
    "KittingAndFulfillment"
  );
export const fetchStandartDirectMailData = () =>
  fetchData<SubCategoryCommonTypes>(
    "DirectMailMaillingServices",
    "StandartDirectMail"
  );
export const fetchListManagementServicesData = () =>
  fetchData<SubCategoryCommonTypes>(
    "DirectMailMaillingServices",
    "ListManagementServices"
  );
export const fetchTargetedDirectMailData = () =>
  fetchData<SubCategoryCommonTypes>(
    "DirectMailMaillingServices",
    "TargetedDirectMail"
  );

// Signs
export const fetchADAWayfindingSignsData = () =>
  fetchData<SubCategoryCommonTypes>("Signs", "ADAWayfindingSigns");
export const fetchBoothGraphicsSignsBannersData = () =>
  fetchData<SubCategoryCommonTypes>("Signs", "BoothGraphicsSignsBanners");
export const fetchCarGraphicsWrapsData = () =>
  fetchData<SubCategoryCommonTypes>("Signs", "CarGraphicsWraps");
export const fetchDeliveryTakeoutSignsData = () =>
  fetchData<SubCategoryCommonTypes>("Signs", "DeliveryTakeoutSigns");
export const fetchInteriorOfficeLobbyDecorData = () =>
  fetchData<SubCategoryCommonTypes>("Signs", "InteriorOfficeLobbyDecor");
export const fetchNowOpenSignsGraphicsData = () =>
  fetchData<SubCategoryCommonTypes>("Signs", "NowOpenSignsGraphics");
export const fetchPullupBannersFlagsData = () =>
  fetchData<SubCategoryCommonTypes>("Signs", "PullupBannersFlags");
export const fetchTradeshowEventSignsData = () =>
  fetchData<SubCategoryCommonTypes>("Signs", "TradeshowEventSigns");
export const fetchWindowWallFloorGraphicsData = () =>
  fetchData<SubCategoryCommonTypes>("Signs", "WindowWallFloorGraphics");
export const fetchYardOutdoorSignsData = () =>
  fetchData<SubCategoryCommonTypes>("Signs", "YardOutdoorSigns");

export const fetchGraphicDesignData = () =>
  fetchData<SubCategoryCommonTypes>("GraphicDesign", "GraphicDesign");

export const fetchCustomPackagingData = () =>
  fetchData<SubCategoryCommonTypes>("LabelsPackaging", "CustomPackaging");

export const fetchPremiumPrivateLabelsData = () =>
  fetchData<SubCategoryCommonTypes>("LabelsPackaging", "PremiumPrivateLabels");

export const fetchProductPromotionalLabelsData = () =>
  fetchData<SubCategoryCommonTypes>(
    "LabelsPackaging",
    "ProductPromotionalLabels"
  );

export const fetchQRCodesNoTouchOptionsData = () =>
  fetchData<SubCategoryCommonTypes>("LabelsPackaging", "QRcodesNoTouchOptions");

export const fetchSafetyLabelsData = () =>
  fetchData<SubCategoryCommonTypes>("LabelsPackaging", "SafetyLabels");

export const fetchShortRunPackagingData = () =>
  fetchData<SubCategoryCommonTypes>("LabelsPackaging", "ShortRunPackaging");

export const fetchStickersDecalsData = () =>
  fetchData<SubCategoryCommonTypes>("LabelsPackaging", "StickersDecals");

export const fetchCampaignsConsultationData = () =>
  fetchData<SubCategoryCommonTypes>(
    "MarketingServices",
    "CampaignsConsultation"
  );

export const fetchSocialMediaData = () =>
  fetchData<SubCategoryCommonTypes>("MarketingServices", "SocialMedia");

export const fetchVideoProductionData = () =>
  fetchData<SubCategoryCommonTypes>("MarketingServices", "VideoProduction");

export const fetchWebsiteDesignData = () =>
  fetchData<SubCategoryCommonTypes>("MarketingServices", "WebsiteDesign");

export const fetchCounterPopUpDisplaysData = () =>
  fetchData<SubCategoryCommonTypes>("TradeshowsEvents", "CounterPopUpDisplays");

export const fetchEventLiteratureSignsData = () =>
  fetchData<SubCategoryCommonTypes>("TradeshowsEvents", "EventLiteratureSigns");

export const fetchGiftsAwardsIncentivesData = () =>
  fetchData<SubCategoryCommonTypes>(
    "TradeshowsEvents",
    "GiftsAwardsIncentives"
  );

export const fetchPrePostShowDirectMailData = () =>
  fetchData<SubCategoryCommonTypes>(
    "TradeshowsEvents",
    "PrePostShowDirectMail"
  );

export const fetchTableCounterKioskDisplaysData = () =>
  fetchData<SubCategoryCommonTypes>(
    "TradeshowsEvents",
    "TableCounterKioskDisplays"
  );

export const fetchInventoryManagementData = () =>
  fetchData<SubCategoryCommonTypes>(
    "FulfillmentServices",
    "InventoryManagement"
  );

export const fetchMarketingSalesKitsData = () =>
  fetchData<SubCategoryCommonTypes>(
    "FulfillmentServices",
    "MarketingSalesKits"
  );

export const fetchPickPackData = () =>
  fetchData<SubCategoryCommonTypes>("FulfillmentServices", "PickPack");

export const fetchProductFulfillmentData = () =>
  fetchData<SubCategoryCommonTypes>(
    "FulfillmentServices",
    "ProductFulfillment"
  );

// Industry Specific

export const fetchEducationData = () =>
  fetchData<SubCategoryCommonTypes>("IndustrySpecific", "Education");

export const fetchFinanceData = () =>
  fetchData<SubCategoryCommonTypes>("IndustrySpecific", "Finance");

export const fetchHealthCareData = () =>
  fetchData<SubCategoryCommonTypes>("IndustrySpecific", "HealthCare");

export const fetchLegalData = () =>
  fetchData<SubCategoryCommonTypes>("IndustrySpecific", "Legal");

export const fetchManufacturingData = () =>
  fetchData<SubCategoryCommonTypes>("IndustrySpecific", "Manufacturing");

export const fetchPoliticalData = () =>
  fetchData<SubCategoryCommonTypes>("IndustrySpecific", "Political");

export const fetchRealEstateData = () =>
  fetchData<SubCategoryCommonTypes>("IndustrySpecific", "RealEstate");

export const fetchRestaurantsData = () =>
  fetchData<SubCategoryCommonTypes>("IndustrySpecific", "Restaurants");

export const fetchRetailData = () =>
  fetchData<SubCategoryCommonTypes>("IndustrySpecific", "Retail");

// special pages

export const fetchResourceData = () =>
  fetchData<ResourcesDocument>("SpecialPages", "Resources");
export const fetchProductServicesPageData = () =>
  fetchData<ProductServicesDocument>("SpecialPages", "ProductServices");
export const fetchAboutUsData = () =>
  fetchData<AboutUsDocument>("SpecialPages", "AboutUs");
