/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Button, Navbar, Container} from "react-bootstrap";
import CompanyDataService from "../services/companies.services";

const ImageGrid = ({ getItemId }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const data = await CompanyDataService.getAllItems();
    console.log(data.docs);
    setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <>
    <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand>Companies</Navbar.Brand>
          <Button variant="light" href="/dashboard">
            Dashboard
        </Button>
        </Container>
      </Navbar>
      <div className="img-grid">
      
          {items.map((doc) => {
            return (
                <div className="img-wrap" key={doc.id}>
                  <h1>{doc.title}</h1>
                  <img 
                    src={doc.logo}
                    alt=""
                  />
                  <p className="card-description">{doc.description}</p>
              
                </div>
                
            );
          })}
      </div>
    </>
  );
};

export default ImageGrid;