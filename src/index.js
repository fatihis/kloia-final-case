import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./utils/store/store";
import * as serviceWorker from "./serviceWorker";
import Home from "./pages/Home";
import { ListingContextProvider } from "./utils/contexts/ListingContext/ListingContext";
import "./utils/fonts/exo-bold/exo-bold.woff2";
import "./utils/fonts/roboto-regular/roboto-regular.woff2";
ReactDOM.render(
  <Provider store={store}>
    <ListingContextProvider>
      <Home />
    </ListingContextProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
