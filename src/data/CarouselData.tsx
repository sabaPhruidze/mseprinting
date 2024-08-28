import { CarouselType } from "../types/DataTypes";
import { GeneralizedFetch } from "../importantparts/GeneralizedFetch";
// Import the images
import digitalPrinting from "../assets/img/carousel/DIGITAL_PRINTING.jpg";
import directMail from "../assets/img/carousel/DIRECT_MAIL.png";
import offsetPrinting from "../assets/img/carousel/OFFSET_PRINTING.jpg";
import onlineOrdering from "../assets/img/carousel/ONLINE_ORDERING.png";
import printingCopying from "../assets/img/carousel/PRINTING_COPYING.png";
import signs from "../assets/img/carousel/SIGNS.png";

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
  printingCopying,
  directMail,
  signs,
  onlineOrdering,
];
