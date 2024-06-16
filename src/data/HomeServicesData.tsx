import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/Firebase";

export interface HomeServicesType {
  image: string | null;
  link: string | null;
  text: string | null;
  title: string | null;
}

export const fetchHomeServicesData = async (): Promise<HomeServicesType> => {
  try {
    const docRef = doc(db, "home", "productsServices");

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data() as HomeServicesType;
      return {
        image: data.image,
        link: data.link,
        text: data.text,
        title: data.title,
      };
    } else {
      return { image: null, link: null, text: null, title: null };
    }
  } catch (error) {
    console.error("Error fetching header main logo: ", error);
    return { image: null, link: null, text: null, title: null };
  }
};
