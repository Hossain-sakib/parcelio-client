import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="font-urbanist bg-linear-to-b from-white to-[#F2FBE1]">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
