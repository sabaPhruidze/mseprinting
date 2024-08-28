import { WWDCCardType, WWDCSpecialitiesContentType } from "../types/DataTypes";
import { GeneralizedFetch } from "../importantparts/GeneralizedFetch";

import BANNERS_POSTERS from "../assets/img/cards/BANNERS_POSTERS.jpg";
import BROCHURES_COLLATERALS from "../assets/img/cards/BROCHURES_COLLATERALS.jpg";
import BUSINESS_FORM from "../assets/img/cards/BUSINESS_FORM.jpg";
import CATALOGYS_BOOKLETS from "../assets/img/cards/CATALOGYS_BOOKLETS.jpg";
import DIRECT_MAIL from "../assets/img/cards/DIRECT_MAIL.jpg";
import LABELS_PACKAGING from "../assets/img/cards/LABELS_PACKAGING.jpg";

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
export const CARDS_DATA = [
  BANNERS_POSTERS,
  BROCHURES_COLLATERALS,
  BUSINESS_FORM,
  DIRECT_MAIL,
  LABELS_PACKAGING,
  CATALOGYS_BOOKLETS,
];
