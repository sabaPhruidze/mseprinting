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
  {
    src: BANNERS_POSTERS,
    alt: "Banners and Posters",
    title: "High-Quality Banners and Posters",
    geoData: {
      latitude: "40.7128",
      longitude: "-74.0060",
      location: "New York",
    },
  },
  {
    src: BROCHURES_COLLATERALS,
    alt: "Brochures and Collaterals",
    title: "Professional Brochures and Collaterals",
    geoData: {
      latitude: "34.0522",
      longitude: "-118.2437",
      location: "Los Angeles",
    },
  },
  {
    src: BUSINESS_FORM,
    alt: "Business Forms",
    title: "Custom Business Forms",
    geoData: {
      latitude: "41.8781",
      longitude: "-87.6298",
      location: "Chicago",
    },
  },
  {
    src: CATALOGYS_BOOKLETS,
    alt: "Catalogs and Booklets",
    title: "Catalogs and Booklets Printing",
    geoData: {
      latitude: "29.7604",
      longitude: "-95.3698",
      location: "Houston",
    },
  },
  {
    src: DIRECT_MAIL,
    alt: "Direct Mail",
    title: "Direct Mail Services",
    geoData: {
      latitude: "33.7490",
      longitude: "-84.3880",
      location: "Atlanta",
    },
  },
  {
    src: LABELS_PACKAGING,
    alt: "Labels and Packaging",
    title: "Custom Labels and Packaging",
    geoData: {
      latitude: "39.7392",
      longitude: "-104.9903",
      location: "Denver",
    },
  },
];
