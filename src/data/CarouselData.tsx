import { CarouselType } from "../types/DataTypes";
import { GeneralizedFetch } from "../importantparts/GeneralizedFetch";

export const fetchCarouselData = async (): Promise<CarouselType[]> => {
  const data = await GeneralizedFetch<{ data: CarouselType[] }>(
    "home",
    "carousel"
  );
  return data ? data.data : [];
};
