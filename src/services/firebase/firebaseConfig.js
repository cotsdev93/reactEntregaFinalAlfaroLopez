import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALgB_xhiZAJT6fziQtoRz0Qyzv5Euntvs",
  authDomain: "entregafinalalfarolopez.firebaseapp.com",
  projectId: "entregafinalalfarolopez",
  storageBucket: "entregafinalalfarolopez.appspot.com",
  messagingSenderId: "637325692269",
  appId: "1:637325692269:web:d762e4ffeda8ef8f3f9e64",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
