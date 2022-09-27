import { useState } from "react";
import { Button, Container, Navbar, Row, Col } from "react-bootstrap";
import AddCompany from "../components/AddCompany";
import CompaniesList from "../components/CompaniesList";

function Companies() {
  const [bookId, setBookId] = useState("");

  const getBookIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setBookId(id);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand>Dashboard - Create, Update or Delete Companies</Navbar.Brand>
          <Button variant="light" href="/companies">
            Companies
        </Button>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddCompany id={bookId} setBookId={setBookId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <CompaniesList getBookId={getBookIdHandler} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Companies;