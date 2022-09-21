import {useState, useEffect } from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { db } from 'firebase-config';
import { collection, getDocs } from "firebase/firestore";
import '../next.config';

function Companies() {
  const [items, setItems] = useState([]);
  const itemsCollectionRef = collection(db, "company-list")
  useEffect(() => {

    const getItems = async () => {
        const data = await getDocs(itemsCollectionRef);
        setItems(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };

    getItems();
  }, [itemsCollectionRef]);

  return (
    <div>
     
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
