import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// A Store is a global state
// A Store sends current state to the view

// View is the components. Here you have interactions such as a click or submit
// This will fire an action creator which will dispatch an action to the store
// Passing Previous State, and action.

// Reducers are pure functions which determine how the state should change based on the action.
// Reducers respond with the new state back to the store and view where components will react.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
