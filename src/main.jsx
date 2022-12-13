import React from "react";
// import ReactDOM from 'react-dom/client'
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";

// react18:
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App reactVersion={18} />
  </React.StrictMode>
);

// react17：
// ReactDOM.render(
//   <React.StrictMode>
//     <App reactVersion={17} />
//   </React.StrictMode>,
//   document.getElementById("root")
// );


