// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3904d.firebaseapp.com",
  projectId: "mern-estate-3904d",
  storageBucket: "mern-estate-3904d.appspot.com",
  messagingSenderId: "228025901040",
  appId: "1:228025901040:web:7b7064a81f28c51a994735"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);