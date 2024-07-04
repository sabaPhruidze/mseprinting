import { GeneralizedFetch } from "../../importantparts/GeneralizedFetch";
import { EOEDiversityDocument } from "../../types/DataTypes";

export const fetchAccessibilityData =
  async (): Promise<EOEDiversityDocument | null> => {
    return GeneralizedFetch<EOEDiversityDocument>(
      "sub-category",
      "EoeDiversity"
    );
  };
