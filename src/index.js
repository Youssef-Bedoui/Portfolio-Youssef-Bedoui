import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
