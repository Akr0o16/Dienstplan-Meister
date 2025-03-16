// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDeYvNO_oZ0WmpavlULVItPlhX4nKKAc00",
    authDomain: "dienstplan-meister.firebaseapp.com",
    projectId: "dienstplan-meister",
    storageBucket: "dienstplan-meister.firebasestorage.app",
    messagingSenderId: "374375468661",
    appId: "1:374375468661:web:97746560eec2ff0d51f23c",
    measurementId: "G-27T3C4PCTQ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
