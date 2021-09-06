import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { initContract } from "./store/interactions";


window.nearInitPromise = initContract()
  .then(() => {
    ReactDOM.render(
      <Provider store={configureStore()}>
        {/* <React.StrictMode> */}
          <App />
        {/* </React.StrictMode> */}
      </Provider>,
      document.querySelector("#root")
    );
  })
  .catch(console.error);
