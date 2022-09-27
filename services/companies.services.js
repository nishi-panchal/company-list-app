import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const itemCollectionRef = collection(db, "company-list");
class CompanyDataService {
  addItems = (newItem) => {
    return addDoc(itemCollectionRef, newItem);
  };

  updateItem = (id, updatedItem) => {
    const itemDoc = doc(db, "company-list", id); //check whether data item exists
    return updateDoc(itemDoc, updatedItem);
  };

  deleteItem = (id) => {
    const itemDoc = doc(db, "company-list", id); //check whether data item exists
    return deleteDoc(itemDoc);
  };

  getAllItems = () => {
    return getDocs(itemCollectionRef);
  };

  getItem = (id) => {
    const itemDoc = doc(db, "company-list", id);
    return getDoc(itemDoc);
  };
}

export default new CompanyDataService();