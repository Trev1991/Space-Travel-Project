import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { SpaceProvider } from "./context/SpaceTravelContext.jsx";

/* global theme + base */
import "./styles/theme.css";
import "./styles/base.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SpaceProvider>
      <App />
    </SpaceProvider>
  </StrictMode>
);
