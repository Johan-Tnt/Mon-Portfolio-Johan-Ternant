//Code éditer par Johan
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./sass/main.scss";
import "./i18n"; //Importation d'i18n pour l'internationalisation

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
