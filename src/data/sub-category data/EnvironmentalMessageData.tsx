import { GeneralizedFetch } from "../../importantparts/GeneralizedFetch";
import { EnvironmentalMessageDocument } from "../../types/DataTypes";

export const fetchEnvironmentalMessageData =
  async (): Promise<EnvironmentalMessageDocument | null> => {
    return GeneralizedFetch<EnvironmentalMessageDocument>(
      "sub-category",
      "EnvironmentalMessage"
    );
  };
