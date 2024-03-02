import React, { Fragment } from "react";
import "./App.css";

//Components

import InputTasks from "./components/InputTasks"
import ListTasks from "./components/ListTasks"

function App() {
  return (
    <Fragment>
        <div className="container">
      <InputTasks />
      <ListTasks />
      </div>
    </Fragment>
  );
}

export default App; 