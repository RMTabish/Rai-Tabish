import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// ✅ Function to remove the startup loader
const hideStartupLoader = () => {
  const loader = document.getElementById("startup-loader");
  if (loader) {
    loader.style.transition = "opacity 0.5s ease-out";
    loader.style.opacity = "0";
    setTimeout(() => loader.remove(), 500); // Remove after fade-out
  }
};

// ✅ Create and render the React root
const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
  hideStartupLoader() // ✅ Call function immediately after React renders
);
