import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

function AletTimer({ setAlertShow, type, message }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
      setAlertShow(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <Alert variant={type} onClose={() => setShow(false)} show={show}>
      {message}
    </Alert>
  );
}

export default AletTimer;
