// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO6AO6bArjoT5cxi6tJXWxThh9n7e10ws",
  authDomain: "resapp-45ea8.firebaseapp.com",
  projectId: "resapp-45ea8",
  storageBucket: "resapp-45ea8.firebasestorage.app",
  messagingSenderId: "402601877121",
  appId: "1:402601877121:web:35148a80bc66a4afd3b780",
  measurementId: "G-HBLXP1S2VF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);