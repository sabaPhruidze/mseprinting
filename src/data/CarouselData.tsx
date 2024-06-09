export interface CarouselData {
  alt: string;
  image: string;
  text: string;
  title: string;
}
import { collection, getDocs, DocumentData } from "firebase/firestore";
import { db } from "../config/Firebase";

export interface CarouselData {
  image: string;
  alt: string;
  title: string;
  text: string;
}

export const fetchCarouselData = async (): Promise<CarouselData[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "carousel"));
    let carouselData: CarouselData[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data() as DocumentData;
      if (data.data && Array.isArray(data.data)) {
        carouselData = data.data.map((item: DocumentData) => ({
          alt: item.alt,
          image: item.image,
          text: item.text,
          title: item.title,
        })) as CarouselData[];
      } else if (data.image && data.alt && data.title && data.text) {
        carouselData.push(data as CarouselData);
      }
    });
    return carouselData;
  } catch (error) {
    console.error("Error fetching carousel data: ", error);
    return [];
  }
};
