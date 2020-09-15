import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Import Components
import Home from "./components/Home";
// import Landing from "./components/Landing";
import Err from "./components/Err";

require("dotenv").config();

const App = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route exact path="/" component={Login} /> */}
      <Route path="/home" component={Home} />
      <Route path="*" component={Err} />
    </Switch>
  </BrowserRouter>
);

export default App;
