import { GeneralizedFetch } from "../../importantparts/GeneralizedFetch";
import {
  DigitalPrintingDocument,
  PrintingCopyingDocument,
  CommonDocument,
  CommonDocumentWAS,
  BusinessFormsType,
  LabelsPackagingDocument,
} from "../../types/DataTypes";
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
