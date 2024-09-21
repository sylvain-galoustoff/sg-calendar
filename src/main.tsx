import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.tsx";
import "./styles/index.scss";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Be+Vietnam+Pro:400,700"],
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
