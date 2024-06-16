import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/Firebase";

export interface CarouselData {
  image: string;
  alt: string;
  title: string;
  text: string;
  link: string;
}

export const fetchCarouselData = async (): Promise<CarouselData[]> => {
  try {
    const homeDocRef = doc(db, "home", "carousel");
    const docSnapshot = await getDoc(homeDocRef);
    let carouselData: CarouselData[] = [];

    if (docSnapshot.exists()) {
      const data = docSnapshot.data();

      if (data && Array.isArray(data.data)) {
        carouselData = data.data.map((item: any) => ({
          alt: item.alt,
          image: item.image,
          text: item.text,
          title: item.title,
          link: item.link,
        }));
      }
    }

    return carouselData;
  } catch (error) {
    console.error("Error fetching carousel data: ", error);
    return [];
  }
};
