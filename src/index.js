import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import DownshiftPOC from "./DownshiftPOC";
import registerServiceWorker from "./registerServiceWorker";

// ReactDOM.render(<DownshiftPOC />, document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
