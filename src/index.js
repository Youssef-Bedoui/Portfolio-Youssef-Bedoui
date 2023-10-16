import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes basename={"/Portfolio-Youssef-Bedoui"}>
        <Route exact path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
