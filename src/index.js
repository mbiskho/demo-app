import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Routing from './routing';
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routing/>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
