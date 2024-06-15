import {
  collection,
  getDocs,
  DocumentData,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../config/Firebase";

export interface HMenuData {
  page: string;
  path: string;
}

export const fetchHeaderMenuData = async (): Promise<HMenuData[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "HeaderMenu"));
    let headerMenuData: HMenuData[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data() as DocumentData;
      if (data.Data && Array.isArray(data.Data)) {
        headerMenuData = data.Data.map((item: DocumentData) => ({
          page: item.page,
          path: item.path,
        })) as HMenuData[];
      } else if (data.page && data.path) {
        headerMenuData.push(data as HMenuData);
      }
    });
    return headerMenuData;
  } catch (error) {
    console.error("Error fetching HeaderMenu data: ", error);
    return [];
  }
};

export interface LogoData {
  logo: string | null;
}

export const fetchHeaderMainLogo = async (): Promise<LogoData> => {
  try {
    const docRef = doc(db, "headerMainLogo", "5yNTcldorNMdQW9IPgyO");
    console.log("Document Reference:", docRef.path);

    const docSnap = await getDoc(docRef);
    console.log("Document Snapshot:", docSnap);

    if (docSnap.exists()) {
      const data = docSnap.data() as LogoData;
      return { logo: data.logo };
    } else {
      console.log("No such document!");
      return { logo: null };
    }
  } catch (error) {
    console.error("Error fetching header main logo: ", error);
    return { logo: null };
  }
};
