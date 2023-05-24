import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { MyProvider } from "./api/AppContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyProvider>
    <App />
  </MyProvider>
);
