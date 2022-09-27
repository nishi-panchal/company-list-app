import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button } from "react-bootstrap";
import CompanyDataService from "../services/companies.services";

const AddCompany = ({ id, setItemId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState("");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (title === "" || description === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newItem = {
      title,
      description,
      logo,
    };
    console.log(newItem);

    try {
      if (id !== undefined && id !== "") {
        await CompanyDataService.updateItem(id, newItem);
        setItemId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await CompanyDataService.addItems(newItem);
        setMessage({ error: false, msg: "New company added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setTitle("");
    setDescription("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await CompanyDataService.getItem(id);
      console.log("the record is :", docSnap.data());
      setTitle(docSnap.data().title);
      setDescription(docSnap.data().description);
      setLogo(docSnap.data().logo);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formTitle">
            <InputGroup>
              <InputGroup.Text id="formTitle">🏡</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Company Name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescription">
            <InputGroup>
              <InputGroup.Text id="formDescription">📜</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLogo">
            <InputGroup>
              <InputGroup.Text id="formLogo">🎨</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Logo Image URL"
                value={logo}
                onChange={(e) => setLogo(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
         
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddCompany;