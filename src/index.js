import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Current from "./Current";
import Forecast from "./Forecast";
import Search from "./Search";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="border">
      <div className="content">
        <Search />
        <App />
        <Current />
        <Forecast />
      </div>
    </div>
  </StrictMode>
);
