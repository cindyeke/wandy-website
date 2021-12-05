import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./common/globalStyle";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import categoryLinksReducer from "./features/categorylinks";
import App from "./App";

const store = configureStore({
  reducer: {
    categoryLinks: categoryLinksReducer,
  },
});

ReactDOM.render(
  <>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);
