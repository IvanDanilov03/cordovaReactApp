import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const renderReactDom = () => {
//   ReactDOM.render(<App />, document.getElementById('root'));
// };

if (window.cordova) {
  document.addEventListener(
    "deviceready",
    () => {
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
    },
    false
  );
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorkerRegistration.unregister();
