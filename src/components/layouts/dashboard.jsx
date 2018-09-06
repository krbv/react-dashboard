import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "../../assets/scss/layouts/dashboard.css";

/* TEMPLATE */
import HeaderNav from "../headerNav";
import ModulesNav from "../modulesNav";
import IconPanel from "../iconPanel";

import { connect } from "react-redux";

/* COMPONENTS - modules - task */
import MenuTask from "../task/menuTask";
import MainTask from "../task/mainTask";

class Dashboard extends Component {
  state = {};
  setActiveModule = () => {
    this.props.onSetActiveModule(this.props.match.path);
  };

  componentDidMount() {
    this.setActiveModule();
  }
  render() {
    return (
      <div
        className={
          (this.props.isMainMenuOpen ? "fixedmenu" : "") + " app blue-theme"
        }
      >
        <div
          id="bodyshadow"
          className={this.props.isBobdyDarkened ? "on" : ""}
        />
        <ModulesNav />
        <HeaderNav />
        <Router>
          <Route
            path="/task"
            render={props => (
              <React.Fragment>
                <MenuTask match={props.match} />
                <MainTask match={props.match} />
              </React.Fragment>
            )}
          />
        </Router>

        <IconPanel />
      </div>
    );
  }
}

export default connect(
  state => ({
    isMainMenuOpen: state.windows.menu,
    isBobdyDarkened: state.windows.bodyShadow
  }),
  dispatch => ({
    onSetActiveModule: url => {
      dispatch({
        type: "SWITCH_ACTIVE_MODULE",
        payload: url
      });
    }
  })
)(Dashboard);
