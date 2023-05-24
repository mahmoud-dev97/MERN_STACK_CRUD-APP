import React, { useContext } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { MyContext } from "../api/AppContext";

function ModalBoot({ handelSubmit, title, showModal, setShowModal }) {
  const { currentItem, setCurrentItem, handleInputChange, isSubmitting } =
    useContext(MyContext);

  return (
    <Modal
      show={showModal}
      onHide={() => {
        setShowModal(false);
        setCurrentItem({
          companyName: "",
          origin: "",
        });
      }}
    >
      <Modal.Header>
        <Modal.Title>{title} Company</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handelSubmit}>
          <Form.Control
            value={currentItem.companyName}
            type="text"
            onChange={handleInputChange}
            name="companyName"
            required
            placeholder="Company Name"
          />
          <Form.Control
            value={currentItem.origin}
            type="text"
            className="my-4"
            onChange={handleInputChange}
            name="origin"
            required
            placeholder="Company Origin"
          />
          <Button type="submit" variant="primary" disabled={isSubmitting}>
            {isSubmitting ? <Spinner animation="border" size="sm" /> : title}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalBoot;
