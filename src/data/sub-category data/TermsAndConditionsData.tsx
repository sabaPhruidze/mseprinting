import { GeneralizedFetch } from "../../importantparts/GeneralizedFetch";
import { TermsAndConditionsDocument } from "../../types/DataTypes";

export const fetchPrivacyAndPolicyData =
  async (): Promise<TermsAndConditionsDocument | null> => {
    return GeneralizedFetch<TermsAndConditionsDocument>(
      "sub-category",
      "termsAndConditions"
    );
  };
