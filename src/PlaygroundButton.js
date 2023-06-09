import React from "react";

import styles from "./PlaygroundButton.module.css";

/*
Parent should have a CSS position defined
*/
const PlaygroundButton = ({ href = "#" }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={styles.playgroundButton}
    >
      Open CodeSandbox
    </a>
  );
};

export default PlaygroundButton;
