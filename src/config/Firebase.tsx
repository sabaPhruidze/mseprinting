import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMFV6mkUm5-8l45gnJl_Wm26ISDxHwots",
  authDomain: "mse-printing.firebaseapp.com",
  projectId: "mse-printing",
  storageBucket: "mse-printing.appspot.com",
  messagingSenderId: "900900314881",
  appId: "1:900900314881:web:cee411ad853843c5bd8500",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
