import { Button, Col, Container, Row } from "react-bootstrap";
import ModalAdd from "./components/ModalAdd";
import DataTable from "./components/DataTable";
import ModalUpdate from "./components/ModalUpdate";
import { MyContext } from "./api/AppContext";
import { useContext } from "react";

function App() {
  const { setShowModalA } = useContext(MyContext);
  return (
    <Container>
      <Row className="justify-content-between">
        <Col>
          <h1 className="my-4">CRUD APP</h1>
        </Col>
        <Col className="text-end">
          <Button onClick={() => setShowModalA(true)} className="my-4">
            Add Company
          </Button>
        </Col>
      </Row>
      <DataTable />
      <ModalAdd />
      <ModalUpdate />
    </Container>
  );
}

export default App;
