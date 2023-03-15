import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./utility.css";

import { BreakpointProvider } from "./useBreakpoint";

const root = ReactDOM.createRoot(document.getElementById("search-showcase"));

root.render(
  <BreakpointProvider>
    <App />
  </BreakpointProvider>
);
