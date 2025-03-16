// app.js
import { initializeApp } from "firebase/app";
// Falls du Firestore oder Auth benötigst:
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeYvNO_oZ0WmpavlULVItPlhX4nKKAc00",
  authDomain: "dienstplan-meister.firebaseapp.com",
  projectId: "dienstplan-meister",
  storageBucket: "dienstplan-meister.firebasestorage.app",
  messagingSenderId: "374375468661",
  appId: "1:374375468661:web:97746560eec2ff0d51f23c",
  measurementId: "G-27T3C4PCTQ"
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav ul li a');

    function showSection(id) {
        sections.forEach(section => {
            section.style.display = section.id === id ? 'block' : 'none';
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.id.replace('nav-', '');
            showSection(targetId);
        });
    });

    // Initially show the login section
    showSection('login');
});
