import axios from "axios";
import { Alert, Button, Modal, Spinner } from "react-bootstrap";
import { useContext } from "react";
import { MyContext } from "../api/AppContext";
import { BASE_URL } from "../api/url";
import { ToastContainer } from "react-toastify";
import { successToast } from "./AletTimer";

export default function ModalDelete({ id, show, setShow }) {
  const { isSubmitting, setIsSubmitting } = useContext(MyContext);
  function handleDelete() {
    setIsSubmitting(true);
    setTimeout(() => {
      axios
        .delete(`${BASE_URL}${id}`)
        .then((res) => {
          successToast(res.data);
          setShow(false);
          setIsSubmitting(false);
        })
        .catch((err) => console.log(err));
    }, 1000);
  }

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
            onClick={handleDelete}
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
      <ToastContainer />
    </>
  );
}
