import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./styles.css";
import TodoApp from "./TodoApp";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
