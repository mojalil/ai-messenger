// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN1tjPp8G6X5fQn6cwpjB4Tbj_-fJLJTU",
  authDomain: "chatgpt-messenger-de371.firebaseapp.com",
  projectId: "chatgpt-messenger-de371",
  storageBucket: "chatgpt-messenger-de371.appspot.com",
  messagingSenderId: "1070589205203",
  appId: "1:1070589205203:web:298fc7fce13eb958a01226",
  measurementId: "G-9ZEE5BGLQW",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase app, only if it isnt already initialized
const app = getApps.length ? getApps()[0] : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }
