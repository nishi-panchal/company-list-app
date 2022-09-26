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

  const deleteHandler = async (id) => {
    await CompanyDataService.deleteBook(id);
    getBooks();
  };
  return (
    <>

        
          {books.map((doc, index) => {
            return (
              <div className="img-grid" key={doc.id}>
             
                <img 
                  src={doc.logo}
                  alt=""
                />
             
              </div>
            );
          })}
    </>
  );
};

export default ImageGrid;