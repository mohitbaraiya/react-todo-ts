// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8GBWZl8kfpFTbZvzEyLAtETi68vdf7L4",
  authDomain: "todo-app-fd56c.firebaseapp.com",
  projectId: "todo-app-fd56c",
  storageBucket: "todo-app-fd56c.appspot.com",
  messagingSenderId: "1036155930495",
  appId: "1:1036155930495:web:d9550141610e3c43fc3c4a",
  measurementId: "G-SCSNG1LKP6",
};

// Initialize Firebase
export const app: FirebaseApp = initializeApp(firebaseConfig);
export const analytics: Analytics = getAnalytics(app);
export const db: Firestore = getFirestore(app);
