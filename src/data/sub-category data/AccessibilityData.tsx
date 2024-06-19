import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/Firebase";

export interface ContentPart {
  content: string;
  title?: string;
}

export interface AccessibilityContent {
  firstPart: string;
  mainTitle: string;
  middlePart: ContentPart[];
}

export interface EndContent {
  content: any;
  title: string;
}

export interface HelpContent {
  firstPart: string;
  mail: string;
  secondPart: string;
  title: string;
}

export interface StartContent {
  content: string;
  title: string;
}

export interface AccessibilityDocument {
  start: StartContent[];
  help: HelpContent;
  end: EndContent[];
  accessibility: AccessibilityContent;
}

export const fetchAccessibilityData =
  async (): Promise<AccessibilityDocument | null> => {
    try {
      const docRef = doc(db, "sub-category", "Accessibility");
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
        const data = docSnapshot.data() as AccessibilityDocument;

        return data;
      } else {
        console.error("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Error fetching Accessibility data: ", error);
      return null;
    }
  };
