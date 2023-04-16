import React from "react";
import ReactDOM from "react-dom/client";
import { ContextProvider } from "./Context";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <ContextProvider>
      <React.StrictMode>
        <ScrollToTop />
        <App />
      </React.StrictMode>
    </ContextProvider>
  </Router>
);
