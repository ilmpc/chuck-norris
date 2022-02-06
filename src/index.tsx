import React from "react";
import ReactDOM from "react-dom";
import "modern-normalize/modern-normalize.css";
import "@fontsource/press-start-2p";
import "@16bits/nes.css/css/nes.min.css";

import { App } from "app";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
