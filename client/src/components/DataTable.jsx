import { Button, Table } from "react-bootstrap";
import ModalDelete from "./ModalDelete";
import { useContext, useState } from "react";
import { CompanyContext } from "../api/AppContext";

export default function DataTable() {
  const { data, setCurrentItem, setShowModalU, setShow } =
    useContext(CompanyContext);
  const [id, setId] = useState("");
  function handleDeleteClick(el) {
    setShow(true);
    setId(el._id);
  }
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Company Name</th>
            <th>Company Origin</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{el.companyName}</td>
              <td>{el.origin}</td>
              <td>
                <Button
                  onClick={() => {
                    setCurrentItem(el);
                    setShowModalU(true);
                  }}
                  variant="secondary"
                >
                  Edit
                </Button>
              </td>
              <td>
                <Button onClick={() => handleDeleteClick(el)} variant="danger">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ModalDelete id={id} />
    </>
  );
}
