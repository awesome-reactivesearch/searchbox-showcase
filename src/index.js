import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./custom-select.css";

const root = ReactDOM.createRoot(document.getElementById("search-showcase"));

const Main = () => {
  // Use useState to manage the library state
  const [library, setLibrary] = useState("react");

  // useEffect to parse URL on component mount
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const libraryParam = queryParams.get("library");
    if (libraryParam === "vue" || libraryParam === "react") {
      setLibrary(libraryParam);
    }
  }, []);

  // Function to handle library change and update URL
  const handleLibraryChange = (e) => {
    const newLibrary = e.target.value;
    setLibrary(newLibrary);
    window.history.pushState({}, '', `?library=${newLibrary}`);
  };

  return (
    <>
      <div className="custom-dropdown">
        <select
          className="custom-dropdown__select custom-dropdown__select--white"
          value={library}
          onChange={handleLibraryChange}
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
