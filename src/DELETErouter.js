import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Task from "./components/layouts/dashboard";

export default class extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route path="/task" component={Task} />
        </React.Fragment>
      </Router>
    );
  }
}
