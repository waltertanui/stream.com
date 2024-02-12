// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClZcxSa0-3VAW4h61InmChoaLwwBf5kzQ",
  authDomain: "stream-landing-page-820e5.firebaseapp.com",
  projectId: "stream-landing-page-820e5",
  storageBucket: "stream-landing-page-820e5.appspot.com",
  messagingSenderId: "904807582339",
  appId: "1:904807582339:web:7953d330b79e709de7e9b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// db
export const db = getFirestore(app);
