import { CarouselType } from "../types/DataTypes";
import { GeneralizedFetch } from "../importantparts/GeneralizedFetch";
// Import the images
import digitalPrinting from "../assets/img/carousel/DIGITAL_PRINTING.jpeg";
import directMail from "../assets/img/carousel/DIRECT_MAIL.jpeg";
import offsetPrinting from "../assets/img/carousel/OFFSET_PRINTING.jpeg";
import onlineOrdering from "../assets/img/carousel/ONLINE_ORDERING.jpeg";
import printingCopying from "../assets/img/carousel/PRINTING_COPYING.jpeg";
import signs from "../assets/img/carousel/SIGNS.jpeg";

export const fetchCarouselData = async (): Promise<CarouselType[]> => {
  const data = await GeneralizedFetch<{ data: CarouselType[] }>(
    "home",
    "carousel"
  );
  return data ? data.data : [];
};

export const CAROUSEL_DATA = [
  offsetPrinting,
  digitalPrinting,
  directMail,
  onlineOrdering,
  printingCopying,
  signs,
];
