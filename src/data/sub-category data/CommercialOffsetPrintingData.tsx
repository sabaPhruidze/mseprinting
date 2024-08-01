import { GeneralizedFetch } from "../../importantparts/GeneralizedFetch";
import { OffsetPrintingDocument } from "../../types/DataTypes";

export const fetchOffsetPrintingData =
  async (): Promise<OffsetPrintingDocument | null> => {
    return GeneralizedFetch<OffsetPrintingDocument>(
      "sub-category",
      "OffsetPrinting"
    );
  };
