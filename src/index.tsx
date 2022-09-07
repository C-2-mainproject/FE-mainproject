import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Reset } from "styled-reset";
import App from "./App";
import store from "./redux/config/configStore";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Reset />
      <App />
    </Provider>
  </React.StrictMode>,
);
