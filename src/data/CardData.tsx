import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/Firebase";

export interface WWDCCardType {
  image: string;
  link: string;
  text: string;
  title: string;
}

export const fetchWWDCCardData = async (): Promise<WWDCCardType[]> => {
  try {
    const homeDocRef = doc(db, "home", "WWDCCard");
    const docSnapshot = await getDoc(homeDocRef);

    let WWDCCardData: WWDCCardType[] = [];

    if (docSnapshot.exists()) {
      const data = docSnapshot.data();

      if (data && Array.isArray(data.data)) {
        WWDCCardData = data.data.map((item: any) => ({
          image: item.image,
          text: item.text,
          title: item.title,
          link: item.link,
        }));
      }
    }

    return WWDCCardData;
  } catch (error) {
    console.error("Error fetching WWDCCard data: ", error);
    return [];
  }
};
