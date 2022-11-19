import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import ButtonScrollUp from "./components/ButtonScrollUp/ButtonScrollUp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ButtonScrollUp />
    <App />
  </React.StrictMode>
);
