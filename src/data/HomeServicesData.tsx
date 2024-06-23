import { HomeServicesType } from "../types/DataTypes";
import { GeneralizedFetch } from "../importantparts/GeneralizedFetch";

export const fetchHomeServicesData = async (): Promise<HomeServicesType> => {
  const data = await GeneralizedFetch<HomeServicesType>(
    "home",
    "productsServices"
  );
  return data || { image: null, link: null, text: null, title: null };
};
