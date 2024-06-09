export interface HMenuData {
  page: string;
  path: string;
}

export const HeaderMenuData: HMenuData[] = [
  {
    page: "Home",
    path: "/",
  },
  {
    page: "Products & Services",
    path: "productsservices",
  },
  {
    page: "Request a Quote",
    path: "requestquote",
  },
  {
    page: "Send a File",
    path: "sendfile",
  },
];

import { collection, getDocs, DocumentData } from "firebase/firestore";
import { db } from "../config/Firebase"; // Adjust the path as needed
// Adjust the path as needed

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
