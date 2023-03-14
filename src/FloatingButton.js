import React from "react";

import "./FloatingButton.css";

/*
Parent should have a CSS position defined
*/
const FloatingButton = ({ onClick = () => {} }) => (
  <button onClick={onClick} className="floatingButton">
    ⓘ
  </button>
);

export default FloatingButton;
