import { GeneralizedFetch } from "../../importantparts/GeneralizedFetch";
import {
  DigitalPrintingDocument,
  PrintingCopyingDocument,
  CommonDocument,
  CommonDocumentWAS,
  BusinessFormsType,
  LabelsPackagingDocument,
  SearchResultDocument,
} from "../../types/DataTypes";

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
export const fetchDigitalPrintingData =
  async (): Promise<DigitalPrintingDocument | null> => {
    return GeneralizedFetch<DigitalPrintingDocument>(
      "sub-category",
      "DigitalPrinting"
    );
  };

export const fetchCopyPrintingData =
  async (): Promise<PrintingCopyingDocument | null> => {
    return GeneralizedFetch<PrintingCopyingDocument>(
      "sub-category",
      "PrintingCopying"
    );
  };
export const fetchDirectMailingData =
  async (): Promise<CommonDocument | null> => {
    return GeneralizedFetch<CommonDocument>("sub-category", "DirectMail");
  };

export const fetchSignsData = async (): Promise<CommonDocument | null> => {
  return GeneralizedFetch<CommonDocument>("sub-category", "Signs");
};
export const fetchOnlinePortalData =
  async (): Promise<CommonDocument | null> => {
    return GeneralizedFetch<CommonDocument>("sub-category", "OrderingPortals");
  };
// cards pages
export const fetchBannersPostersData =
  async (): Promise<CommonDocumentWAS | null> => {
    return GeneralizedFetch<CommonDocumentWAS>("CardsPages", "BannersPosters");
  };

export const fetchBrochuresCollateralData =
  async (): Promise<CommonDocumentWAS | null> => {
    return GeneralizedFetch<CommonDocumentWAS>(
      "CardsPages",
      "BrochuresCollateral"
    );
  };

export const fetchBusinessFormsData =
  async (): Promise<BusinessFormsType | null> => {
    return GeneralizedFetch<BusinessFormsType>("CardsPages", "BusinessForms");
  };
export const fetchMKBookletsData =
  async (): Promise<CommonDocumentWAS | null> => {
    return GeneralizedFetch<CommonDocumentWAS>("CardsPages", "MKBooklets");
  };

export const fetchLabelsPackagingData =
  async (): Promise<LabelsPackagingDocument | null> => {
    return GeneralizedFetch<LabelsPackagingDocument>(
      "CardsPages",
      "LabelsPackaging"
    );
  };

export const fetchBusinessAnnualReportsData =
  async (): Promise<CommonDocumentWAS | null> => {
    return GeneralizedFetch<CommonDocumentWAS>(
      "printingCopying",
      "BusinessAnnualReports"
    );
  };
export const fetchBusinessCardsStationeryData =
  async (): Promise<CommonDocumentWAS | null> => {
    return GeneralizedFetch<CommonDocumentWAS>(
      "printingCopying",
      "BusinessCardsStationery"
    );
  };
export const fetchNewslettersFlyersRackCardsData =
  async (): Promise<CommonDocumentWAS | null> => {
    return GeneralizedFetch<CommonDocumentWAS>(
      "printingCopying",
      "NewslettersFlyersRackCards"
    );
  };
export const fetchPostCardsDirectMailersData =
  async (): Promise<CommonDocumentWAS | null> => {
    return GeneralizedFetch<CommonDocumentWAS>(
      "printingCopying",
      "PostCardsDirectMailers"
    );
  };
export const fetchPresentationTrainingMaterialsData =
  async (): Promise<CommonDocumentWAS | null> => {
    return GeneralizedFetch<CommonDocumentWAS>(
      "printingCopying",
      "PresentationTrainingMaterials"
    );
  };
// Missing CardsPages collection fetch functions

export const fetchApparelUniformsData =
  async (): Promise<CommonDocumentWAS | null> => {
    return GeneralizedFetch<CommonDocumentWAS>("CardsPages", "ApparelUniforms");
  };

export const fetchBookPrintingData =
  async (): Promise<CommonDocumentWAS | null> => {
    return GeneralizedFetch<CommonDocumentWAS>("CardsPages", "BookPrinting");
  };

export const fetchCardsAndInvitationsData =
  async (): Promise<CommonDocumentWAS | null> => {
    return GeneralizedFetch<CommonDocumentWAS>(
      "CardsPages",
      "CardsAndInvitations"
    );
  };

export const fetchLabelsStickersDecalsData =
  async (): Promise<CommonDocumentWAS | null> => {
    return GeneralizedFetch<CommonDocumentWAS>(
      "CardsPages",
      "LabelsStickersDecals"
    );
  };

export const fetchLegalCopyingData =
  async (): Promise<CommonDocumentWAS | null> => {
    return GeneralizedFetch<CommonDocumentWAS>("CardsPages", "LegalCopying");
  };

export const fetchPosterPrintingData =
  async (): Promise<CommonDocumentWAS | null> => {
    return GeneralizedFetch<CommonDocumentWAS>("CardsPages", "PosterPrinting");
  };
