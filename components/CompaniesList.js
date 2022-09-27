/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import CompanyDataService from "../services/companies.services";

const CompaniesList = ({ getItemId }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const data = await CompanyDataService.getAllItems();
    console.log(data.docs);
    setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await CompanyDataService.deleteItem(id);
    getItems();
  };
  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getItems}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Company Name</th>
            <th>Description</th>
            <th>Logo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.title}</td>
                <td class="col-md-3">{doc.description}</td>
                <td><img width="100px" src={doc.logo} alt={doc.title}/></td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getItemId(doc.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default CompaniesList;