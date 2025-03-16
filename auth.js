import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = loginForm['email'].value;
  const password = loginForm['password'].value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('User logged in:', user);
      // Redirect or perform other actions
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error logging in:', errorCode, errorMessage);
    });
});
