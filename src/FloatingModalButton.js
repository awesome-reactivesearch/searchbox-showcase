import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import "./FloatingModalButton.css";

/*
Parent should have a CSS position defined
*/
const FloatingModalButton = ({
  description = "Nothing to show here!",
  title = "Embed",
}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)} className="floatingButton">
        ⓘ
      </button>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
      </Modal>
    </>
  );
};

export default FloatingModalButton;
