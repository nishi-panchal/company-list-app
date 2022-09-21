import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDvLZ-Sfbozl-2IsS6wxn3NFwpcLUkhMj8",
    authDomain: "company-list-app-61c64.firebaseapp.com",
    projectId: "company-list-app-61c64",
    storageBucket: "company-list-app-61c64.appspot.com",
    messagingSenderId: "777334506322",
    appId: "1:777334506322:web:5a475d6fb714877eb1f08b",
    measurementId: "G-6PJPW7KL8J"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);