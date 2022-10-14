import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import stores from "./stores";
const { store, persistor } = stores;

import { PersistGate } from "redux-persist/es/integration/react";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);

reportWebVitals();
