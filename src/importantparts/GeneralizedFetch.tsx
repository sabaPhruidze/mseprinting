import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/Firebase";

export const GeneralizedFetch = async <T,>(
  collection: string,
  document: string
): Promise<T | null> => {
  try {
    const docRef = doc(db, collection, document);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      return docSnapshot.data() as T;
    } else {
      console.error("No such document!");
      return null;
    }
  } catch (error) {
    console.error(
      `Error fetching data from ${collection}/${document}: `,
      error
    );
    return null;
  }
};
