/**
 * @copyright 2025 zanwalker-dev
 * @license Apache-2.0
 */

// Node Modules
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Components
import App from "./App.jsx";

// Css
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
