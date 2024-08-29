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

// Define metadata for each image
export const CAROUSEL_DATA = [
  {
    src: offsetPrinting,
    alt: "Offset Printing",
    title: "Offset Printing Services",
    geoData: {
      latitude: "44.9778",
      longitude: "-93.2650",
      location: "Minneapolis",
    },
  },
  {
    src: digitalPrinting,
    alt: "Digital Printing",
    title: "Digital Printing Services",
    geoData: {
      latitude: "44.9778",
      longitude: "-93.2650",
      location: "Minneapolis",
    },
  },
  {
    src: printingCopying,
    alt: "Printing and Copying",
    title: "Printing and Copying Services",
    geoData: {
      latitude: "44.9778",
      longitude: "-93.2650",
      location: "Minneapolis",
    },
  },
  {
    src: directMail,
    alt: "Direct Mail",
    title: "Direct Mail Services",
    geoData: {
      latitude: "44.9778",
      longitude: "-93.2650",
      location: "Minneapolis",
    },
  },
  {
    src: signs,
    alt: "Signs",
    title: "Signage Services",
    geoData: {
      latitude: "44.9778",
      longitude: "-93.2650",
      location: "Minneapolis",
    },
  },
  {
    src: onlineOrdering,
    alt: "Online Ordering",
    title: "Online Ordering Services",
    geoData: {
      latitude: "44.9778",
      longitude: "-93.2650",
      location: "Minneapolis",
    },
  },
];
