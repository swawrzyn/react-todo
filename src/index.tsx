import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import "./index.css";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";

import TodosIndex from "./routes/todos";
import AuthIndex from "./routes/auth";
import AboutIndex from "./routes/about";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="todos" element={<Outlet />}>
            <Route path="" element={<TodosIndex />} />
          </Route>
          <Route path="about" element={<Outlet />}>
            <Route path="" element={<AboutIndex />} />
          </Route>
          <Route path="auth" element={<Outlet />}>
            <Route path="" element={<AuthIndex />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
