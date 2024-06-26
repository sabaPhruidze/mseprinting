import { GeneralizedFetch } from "../../importantparts/GeneralizedFetch";
import { PrivacyPolicySection } from "../../types/DataTypes";

export const fetchPrivacyAndPolicyData =
  async (): Promise<PrivacyPolicySection | null> => {
    return GeneralizedFetch<PrivacyPolicySection>(
      "sub-category",
      "PrivacyAndPolicy"
    );
  };
