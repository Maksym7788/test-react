import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "modern-normalize";
import "./index.css";
// import App from "./App.jsx";
// import { AppL2 } from "./AppL2.jsx";
import AppHW2 from "./AppHW2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <AppL2 /> */}
    <AppHW2 />
  </StrictMode>
);
