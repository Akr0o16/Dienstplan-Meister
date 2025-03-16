<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <title>Dienstplan Meister</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
    <header>
        <h1>Roster</h1>
    </header>
    <main>
        <p>Dies ist eine Platzhalterseite für roster.aspx.</p>
    </main>
    <footer>
        <p>&copy; 2025 Dienstplan Meister</p>
    </footer>
    <script type="module">
      // Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
      import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries

      // Your web app's Firebase configuration
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
      const analytics = getAnalytics(app);
    </script>
    <!-- Firebase App (the core Firebase SDK) -->
    <script src="https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js"></script>
    <!-- Add the Firebase products that you want to use -->
    <script src="https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js"></script>
</body>
</html>
