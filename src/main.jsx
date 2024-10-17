import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppStateProvider } from "./Features/AllContext.jsx";

createRoot(document.getElementById("root")).render(
  <AppStateProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </AppStateProvider>
);
