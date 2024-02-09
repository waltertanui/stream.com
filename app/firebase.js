// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASrnFHK-2mzi7qjQcnbNACS63tMMzcYxo",
  authDomain: "stream-landing-page.firebaseapp.com",
  projectId: "stream-landing-page",
  storageBucket: "stream-landing-page.appspot.com",
  messagingSenderId: "616128135120",
  appId: "1:616128135120:web:07b777105a3bd9c7adc3d5",
  measurementId: "G-X1RM6CFZHW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// db
export const db = getFirestore(app);
