import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";

import "./FloatingOverlayButton.css";

/*
Parent should have a CSS position defined
*/
const FloatingModalButton = ({
  description = "Nothing to show here!",
  title = "Embed",
}) => {
  return (
    <>
      <OverlayTrigger
        placement="left"
        delay={{ show: 250, hide: 400 }}
        overlay={
          <Popover>
            <Popover.Header as="h3">{title}</Popover.Header>
            <Popover.Body>{description}</Popover.Body>
          </Popover>
        }
      >
        <button className="floatingButton">ⓘ</button>
      </OverlayTrigger>
    </>
  );
};

export default FloatingModalButton;
