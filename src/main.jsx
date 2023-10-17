import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SearchProvider } from "./contexts/SearchContext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { VITE_GOOGLE_CLIENT_ID } from "./constants/config.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={VITE_GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <SearchProvider>
          <App />
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="light"
          />
        </SearchProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>,
);
