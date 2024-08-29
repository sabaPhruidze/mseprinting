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
      latitude: "54.9778",
      longitude: "-33.2650",
      location: "saburtalo",
    },
  },
  {
    src: digitalPrinting,
    alt: "Digital Printing",
    title: "Digital Printing Services",
    geoData: {
      latitude: "64.9778",
      longitude: "-43.2650",
      location: "vake",
    },
  },
  {
    src: printingCopying,
    alt: "Printing and Copying",
    title: "Printing and Copying Services",
    geoData: {
      latitude: "74.9778",
      longitude: "-53.2650",
      location: "nadzaladevi",
    },
  },
  {
    src: directMail,
    alt: "Direct Mail",
    title: "Direct Mail Services",
    geoData: {
      latitude: "47.9778",
      longitude: "-12.2650",
      location: "temqa",
    },
  },
  {
    src: signs,
    alt: "Signs",
    title: "Signage Services",
    geoData: {
      latitude: "43.4353",
      longitude: "-55.5450",
      location: "sanzona",
    },
  },
  {
    src: onlineOrdering,
    alt: "Online Ordering",
    title: "Online Ordering Services",
    geoData: {
      latitude: "94.9778",
      longitude: "-66.2650",
      location: "gldani",
    },
  },
];
