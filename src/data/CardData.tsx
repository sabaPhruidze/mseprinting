import { WWDCCardType, WWDCSpecialitiesContentType } from "../types/DataTypes";
import { GeneralizedFetch } from "../importantparts/GeneralizedFetch";

export const fetchWWDCCardData = async (): Promise<WWDCCardType[]> => {
  const data = await GeneralizedFetch<{ data: WWDCCardType[] }>(
    "home",
    "WWDCCard"
  );
  return data ? data.data : [];
};

export const fetchWWDCSpecialitiesContentData =
  async (): Promise<WWDCSpecialitiesContentType> => {
    const data = await GeneralizedFetch<WWDCSpecialitiesContentType>(
      "home",
      "WWDCCSpecialitiesContent"
    );

    return data || { paragraph: null, title: null };
  };
