import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: `${process.env.react_api_key}`,
    authDomain: "to-do-react-68a65.firebaseapp.com",
    projectId: "to-do-react-68a65",
    storageBucket: "to-do-react-68a65.appspot.com",
    messagingSenderId: "1027583123842",
    appId: "1:1027583123842:web:0a0712b73b648a0858af9b",
    measurementId: "G-5T3RXKYD6X"
  };
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);