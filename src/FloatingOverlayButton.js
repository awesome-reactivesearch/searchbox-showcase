import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";

import styles from "./FloatingOverlayButton.module.css";
import { useBreakpoint } from "./useBreakpoint";

/*
Parent should have a CSS position defined
*/
const FloatingModalButton = ({
  description = "Nothing to show here!",
  title = "Embed",
}) => {
  const breakpoint = useBreakpoint();
  const triggers =
    breakpoint === "sm" || breakpoint === "xs" ? ["click"] : ["hover"];
  return (
    <>
      <OverlayTrigger
        placement="auto-end"
        trigger={triggers}
        overlay={
          <Popover>
            <Popover.Header as="h3">{title}</Popover.Header>
            <Popover.Body>{description}</Popover.Body>
          </Popover>
        }
      >
        <button className={styles.floatingButton}>ⓘ</button>
      </OverlayTrigger>
    </>
  );
};

export default FloatingModalButton;
