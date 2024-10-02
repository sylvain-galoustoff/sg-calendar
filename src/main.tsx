import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.tsx";
import "./styles/index.scss";
import WebFont from "webfontloader";
import { BrowserRouter } from "react-router-dom";
import { fr } from "date-fns/locale";
import { setDefaultOptions } from "date-fns";

setDefaultOptions({
  locale: fr,
});

WebFont.load({
  google: {
    families: ["Be+Vietnam+Pro:400,700"],
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
