import axios from "axios";
import { Alert, Button, Modal, Spinner } from "react-bootstrap";
import AlertTimer from "./AletTimer";
import { useContext, useState } from "react";
import { MyContext } from "../api/AppContext";

export default function ModalDelete({ id, setData, show, setShow }) {
  const [alertShow, setAlertShow] = useState(false);
  const { isSubmitting, setIsSubmitting, alertInfo, setAlertInfo } =
    useContext(MyContext);
  function handleDelete() {
    setIsSubmitting(true);
    setTimeout(() => {
      axios
        .delete(`http://localhost:3001/${id}`)
        .then((res) => {
          // setData((pre) => pre.filter((el) => el._id !== id));
          setAlertInfo({
            message: res.data,
            type: "success",
          });
          setAlertShow(true);
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
      {alertShow && (
        <AlertTimer
          setAlertShow={setAlertShow}
          message={alertInfo.message}
          type={alertInfo.type}
        />
      )}
    </>
  );
}
