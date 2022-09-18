// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0xA9PfofcWL2gfwWeGuq1zOz-rg-g_Bs",
  authDomain: "vkb-chat.firebaseapp.com",
  projectId: "vkb-chat",
  storageBucket: "vkb-chat.appspot.com",
  messagingSenderId: "712663111186",
  appId: "1:712663111186:web:8609e6270d8d48c95b6acb",
  measurementId: "G-D0WZBHJKKL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth();
export const storage = getStorage();
export const db=getFirestore();
const analytics = getAnalytics(app);