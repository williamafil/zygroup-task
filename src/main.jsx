import React from "react";
import ReactDOM from "react-dom";
import { NotificationProvider } from "./context/notification-context";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
