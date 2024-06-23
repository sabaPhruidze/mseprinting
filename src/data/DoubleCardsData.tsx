import { DoubleCardsDarkType, DoubleCardsLightType } from "../types/DataTypes";
import { GeneralizedFetch } from "../importantparts/GeneralizedFetch";

export const fetchDoubleCardsDarkData =
  async (): Promise<DoubleCardsDarkType> => {
    const data = await GeneralizedFetch<DoubleCardsDarkType>(
      "home",
      "doubleCardsDark"
    );
    return data || { imageDark: "", imageRQ: null, link: null, title: null };
  };

export const fetchDoubleCardsLightData =
  async (): Promise<DoubleCardsLightType> => {
    const data = await GeneralizedFetch<DoubleCardsLightType>(
      "home",
      "doubleCardsLight"
    );
    return data || { imageLight: "", imageSF: null, link: null, title: null };
  };
