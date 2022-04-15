// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCT-GdApP1NQDbKBaiX1_Rk-Z5Lh_Kk2T4",
    authDomain: "react-todo-list-2f590.firebaseapp.com",
    projectId: "react-todo-list-2f590",
    storageBucket: "react-todo-list-2f590.appspot.com",
    messagingSenderId: "882825724875",
    appId: "1:882825724875:web:2fe272f88209e1cdefac4e",
    measurementId: "G-F9GDVG28T4"
};

// Initialize Firebase
const myinit = initializeApp(firebaseConfig);
const analytics = getAnalytics(myinit);

const db = getFirestore();

export default db;
