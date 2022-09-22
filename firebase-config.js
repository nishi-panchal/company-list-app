import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCX0xBSnidwmSyD9-ZPPmAsky_bgz60rXU",
  authDomain: "company-list-app-e46a1.firebaseapp.com",
  projectId: "company-list-app-e46a1",
  storageBucket: "company-list-app-e46a1.appspot.com",
  messagingSenderId: "598572399044",
  appId: "1:598572399044:web:00a483eaa580d5fa478c91",
  measurementId: "G-0F06YVXTJ8"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);