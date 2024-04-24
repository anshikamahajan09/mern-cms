// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "campus-flow-cms-mern.firebaseapp.com",
  projectId: "campus-flow-cms-mern",
  storageBucket: "campus-flow-cms-mern.appspot.com",
  messagingSenderId: "721683672598",
  appId: "1:721683672598:web:abde2083376f0b0f3acf37",
  measurementId: "G-3R0RTH3X49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);