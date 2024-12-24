import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";

import AOS from 'aos';
import 'aos/dist/aos.css';
import App from "./App";

import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

AOS.init();


root.render(
    <Provider store={store}>
        <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>
);