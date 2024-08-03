import { GeneralizedFetch } from "../../importantparts/GeneralizedFetch";
import {
  DigitalPrintingDocument,
  PrintingCopyingDocument,
  DirectMailDocument,
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
  async (): Promise<DirectMailDocument | null> => {
    return GeneralizedFetch<DirectMailDocument>("sub-category", "DirectMail");
  };
