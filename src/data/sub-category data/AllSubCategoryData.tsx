import { GeneralizedFetch } from "../../importantparts/GeneralizedFetch";
import {
  DigitalPrintingDocument,
  PrintingCopyingDocument,
  CommonDocument,
} from "../../types/DataTypes";

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
