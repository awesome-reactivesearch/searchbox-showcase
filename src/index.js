import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./custom-select.css";

const root = ReactDOM.createRoot(document.getElementById("search-showcase"));

const Main = () => {
  const [library, setLibrary] = useState("react");
  return (
    <>
      <div className="custom-dropdown">
        <select
          className="custom-dropdown__select custom-dropdown__select--white"
          value={library}
          onChange={(e) => setLibrary(e.target.value)}
        >
          <option value="react">&#x269b; React</option>
          <option value="vue">&#x270c; Vue</option>
        </select>
      </div>
      <App library={library} />
    </>
  );
};

root.render(<Main />);

/* Use this file for testing showcase*/
