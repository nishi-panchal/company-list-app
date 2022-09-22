import {useState, useEffect } from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { db } from 'firebase-config';
import { collection, getDocs, addDoc } from "firebase/firestore";
import '../next.config';

function Companies() {
  const [newTitle, setNewTitle] = useState("")
  const [newDescription, setNewDescription] = useState("")
  const [newWebsite, setNewWebsite] = useState("")
  const [newLogo, setNewLogo] = useState("")


  const [items, setItems] = useState([]);
  const itemsCollectionRef = collection(db, "company-list");

  const createItem = async () => {
    await addDoc(itemsCollectionRef, {title: newTitle, description: newDescription, url: newWebsite, logo: newLogo})
  }

  useEffect(() => {
    const getItems = async () => {
        const data = await getDocs(itemsCollectionRef);
        setItems(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };

    getItems();
  }, [itemsCollectionRef]);

  return (
    <div className="companies">
          <div className="companies-input">
            <input placeholder="Company Name" onChange={(event) => {setNewTitle(event.target.value)}}></input>
            <input placeholder="Description" onChange={(event) => {setNewDescription(event.target.value)}}></input>
            <input placeholder="Website Link" onChange={(event) => {setNewWebsite(event.target.value)}}></input>
            <input placeholder="Logo Image URL" onChange={(event) => {setNewLogo(event.target.value)}}></input>
            <button onClick={createItem}>Add Company</button>
          </div>



          {items.map((item) => {
            return (
            // eslint-disable-next-line react/jsx-key
            <div> 
                {""}
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <img
                  src={item.logo}
                  alt={item.title}
                />
                <br/>
                <a href={item.url}>{item.title} website</a>
            </div>
          )
          })}
         

      
    
      
    </div>
  )
}

export default Companies
