 // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
import {getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBTaxrXnhszPMsLvFryQC7K9dFTukO-0p8",
    authDomain: "icodemy-b08eb.firebaseapp.com",
    projectId: "icodemy-b08eb",
    storageBucket: "icodemy-b08eb.appspot.com",
    messagingSenderId: "1025768308242",
    appId: "1:1025768308242:web:c72fde01cb75ab6119a2cb",
    measurementId: "G-02BCFHE7PQ"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
