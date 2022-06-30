import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ApiService from "./servises/ApiService";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const apiService = new ApiService();

apiService.getItem();
