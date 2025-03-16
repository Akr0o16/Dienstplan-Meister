import { module1 } from './module1.js';
import { module2 } from './module2.js';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { someFunction } from './someModule.js';
import { anotherFunction } from './anotherModule.js';

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

document.addEventListener('DOMContentLoaded', () => {
    // Ensure navigation event listeners are correctly set up
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
