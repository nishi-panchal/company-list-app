/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import CompanyDataService from "../services/companies.services";

const ImageGrid = ({ getBookId }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const data = await CompanyDataService.getAllBooks();
    console.log(data.docs);
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <>
 <Button variant="dark edit" href="/companies">
          Dashboard
        </Button>
      <div className="img-grid">
      
          {books.map((doc, index) => {
            return (
                <div className="img-wrap" key={doc.id}>
                  <h1>{doc.title}</h1>
                  <img 
                    src={doc.logo}
                    alt=""
                  />
              
                </div>
                
            );
          })}
      </div>
    </>
  );
};

export default ImageGrid;