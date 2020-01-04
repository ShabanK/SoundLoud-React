import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button } from "reactstrap";

const googleAuthRoute = "localhost:5000/auth/google";

function App() {
  return (
    <div className="App">
      <Button href={googleAuthRoute}>login</Button>
    </div>
  );
}

export default App;
