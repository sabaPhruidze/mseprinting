import { GeneralizedFetch } from "../../importantparts/GeneralizedFetch";
import { PrivacyAndPolicyDocument } from "../../types/DataTypes";

export const fetchPrivacyAndPolicyData =
  async (): Promise<PrivacyAndPolicyDocument | null> => {
    return GeneralizedFetch<PrivacyAndPolicyDocument>(
      "sub-category",
      "PrivacyAndPolicy"
    );
  };
