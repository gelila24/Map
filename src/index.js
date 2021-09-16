import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Starter from "./Starter";

ReactDOM.render(
  <React.StrictMode>
    <Starter />
  </React.StrictMode>,
  document.getElementById("root")
);

//{location.loaded && !location.error && (
