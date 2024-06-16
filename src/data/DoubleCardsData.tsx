import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/Firebase";

export interface DoubleCardsDarkType {
  imageDark: string;
  imageRQ: string | null;
  link: string | null;
  title: string | null;
}

export const fetchDoubleCardsDarkData =
  async (): Promise<DoubleCardsDarkType> => {
    try {
      const docRef = doc(db, "home", "doubleCardsDark");

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data() as DoubleCardsDarkType;
        return {
          imageDark: data.imageDark,
          imageRQ: data.imageRQ,
          link: data.link,
          title: data.title,
        };
      } else {
        return { imageDark: "", imageRQ: null, link: null, title: null };
      }
    } catch (error) {
      console.error("Error fetching header main logo: ", error);
      return { imageDark: "", imageRQ: null, link: null, title: null };
    }
  };
export interface DoubleCardsLightType {
  imageLight: string;
  imageSF: string | null;
  link: string | null;
  title: string | null;
}

export const fetchDoubleCardsLightData =
  async (): Promise<DoubleCardsLightType> => {
    try {
      const docRef = doc(db, "home", "doubleCardsLight");

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data() as DoubleCardsLightType;
        return {
          imageLight: data.imageLight,
          imageSF: data.imageSF,
          link: data.link,
          title: data.title,
        };
      } else {
        return { imageLight: "", imageSF: null, link: null, title: null };
      }
    } catch (error) {
      console.error("Error fetching header main logo: ", error);
      return { imageLight: "", imageSF: null, link: null, title: null };
    }
  };
