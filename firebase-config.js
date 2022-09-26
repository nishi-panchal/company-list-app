import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyA0_0IN5hf5ruktazImhMwLVpe0_Xsr95I",
//   authDomain: "company-list-app-79bed.firebaseapp.com",
//   projectId: "company-list-app-79bed",
//   storageBucket: "company-list-app-79bed.appspot.com",
//   messagingSenderId: "975894000875",
//   appId: "1:975894000875:web:79944e9b56622b559fbaae",
//   measurementId: "G-TLJB4YQZ1M"
// };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
