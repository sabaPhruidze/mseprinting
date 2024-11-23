import { CarouselType } from "../types/DataTypes";
import { GeneralizedFetch } from "../importantparts/GeneralizedFetch";

export const fetchHomeServicesBannerData =
  async (): Promise<CarouselType | null> => {
    return GeneralizedFetch<CarouselType>("home", "productsServices");
  };
