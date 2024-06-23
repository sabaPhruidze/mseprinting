import { GeneralizedFetch } from "../../importantparts/GeneralizedFetch";
import { AccessibilityDocument } from "../../types/DataTypes";

export const fetchAccessibilityData =
  async (): Promise<AccessibilityDocument | null> => {
    return GeneralizedFetch<AccessibilityDocument>(
      "sub-category",
      "Accessibility"
    );
  };
