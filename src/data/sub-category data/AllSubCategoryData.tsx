import { GeneralizedFetch } from "../../importantparts/GeneralizedFetch";
import { DigitalPrintingDocument } from "../../types/DataTypes";

export const fetchDigitalPrintingData =
  async (): Promise<DigitalPrintingDocument | null> => {
    return GeneralizedFetch<DigitalPrintingDocument>(
      "sub-category",
      "DigitalPrinting"
    );
  };
