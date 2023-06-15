import { Alert, Button, Modal, Spinner } from "react-bootstrap";
import { useContext } from "react";
import { CompanyContext } from "../api/AppContext";

export default function ModalDelete({ id }) {
  const { isSubmitting, setIsSubmitting, deleteCompany, show, setShow } =
    useContext(CompanyContext);

  function handleClose() {
    setShow(false);
    setIsSubmitting(false);
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Alert className="m-0 p-3" onClose={handleClose} variant="danger">
          <h4 className="mb-4 mt-3">Are you sure to delete this item?</h4>
          <Button
            onClick={() => deleteCompany(id)}
            variant="danger"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Spinner animation="border" size="sm" /> : "Yes"}
          </Button>
          <Button className="ms-3" onClick={handleClose} variant="success">
            No
          </Button>
        </Alert>
      </Modal>
    </>
  );
}
