import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./component/App";
import EditUser from "./component/EditUser";

ReactDOM.render(
  <Router>
    <Route path="/" exact>
      <App />
    </Route>
    <Route path="/edit/:id" component={EditUser} />
  </Router>,

  document.getElementById("root")
);
