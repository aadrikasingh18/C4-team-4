import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import theme from "./flowbite-theme";
import { Flowbite } from "flowbite-react";
import { BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./routes/AllRoutes";

const container = document.getElementById("root");

if (!container) {
  throw new Error("React root element doesn't exist!");
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <Flowbite theme={{ theme }}>
      <BrowserRouter>
        
        <AllRoutes/>
        
      </BrowserRouter>
    </Flowbite>
  </StrictMode>
);
