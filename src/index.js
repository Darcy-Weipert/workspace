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
      <footer>
        This project was coded by{" "}
        <a href="https://tourmaline-swan-bb7a93.netlify.app/" target="_blank">
          Darcy Weipert
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/Darcy-Weipert/react-weather-app.git"
          target="_blank"
        >
          open-sourced on Github
        </a>
      </footer>
    </div>
  </StrictMode>
);
