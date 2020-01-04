import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Import Components
import Index from "./components/Index";
import Err from "./components/Err";

require("dotenv").config();
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="*" component={Err} />
    </Switch>
  </BrowserRouter>
);

export default App;
