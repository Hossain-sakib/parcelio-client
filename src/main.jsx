import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/router.jsx";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="font-urbanist bg-linear-to-br from-[#F2FBE1] to-white">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
