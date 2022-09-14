import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TaskcontextProvider } from "./context/TaskContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskcontextProvider>
      <App />
    </TaskcontextProvider>
  </React.StrictMode>,
);
