import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "./components/layouts/dashboard";

import Moment from "react-moment";

import { connect } from "react-redux";

class App extends Component {
  componentWillMount() {
    Moment.globalTimezone = this.props.timezone;
  }
  render() {
    return (
      <Router>
        <Route path="/task" component={Dashboard} />
      </Router>
    );
  }
}

export default connect(state => ({
  timezone: state.user.timezone
}))(App);
