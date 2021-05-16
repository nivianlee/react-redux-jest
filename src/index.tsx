import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider, ReactReduxContextValue } from "react-redux";
import { createStore, AnyAction } from "redux";
import { rootReducer } from "./redux/store";

const MyContext:
  | React.Context<ReactReduxContextValue<any, AnyAction>>
  | undefined = undefined;

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider context={MyContext} store={store}>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
