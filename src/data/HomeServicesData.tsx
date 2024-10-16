import { CarouselType } from "../types/DataTypes";
import { GeneralizedFetch } from "../importantparts/GeneralizedFetch";

// export const fetchHomeServicesBannerData = async (): Promise<CarouselType> => {
//   const data = await GeneralizedFetch<CarouselType>("home", "productsServices");
//   return data || { image: null, link: null, text: null, title: null };
// };
export const fetchHomeServicesBannerData =
  async (): Promise<CarouselType | null> => {
    return GeneralizedFetch<CarouselType>("home", "productsServices");
  };
