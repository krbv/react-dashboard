import React, { Component } from "react";
import MenuSection from "../main/menuSection";
import { connect } from "react-redux";

//import { getSolarDayInformation } from "../main/modalWindow.jsx";

class MenuTask extends Component {
  render() {
    return (
      <nav id="menu">
        <section>
          <button onClick={this.props.onShowAddFrom}>Добавить задачу</button>
        </section>

        {["mains", "labels", "others"].map(type => (
          <MenuSection
            key={type}
            pathPrefix={this.props.match.path}
            menu={this.props.menu[type]}
          />
        ))}
      </nav>
    );
  }
}

export default connect(
  state => ({
    menu: state.taskMenu
  }),
  dispatch => ({
    onShowAddFrom: () => {
      dispatch({ type: "SET_MODAL_WINDOW", payload: "AddTask" });
    }
  })
)(MenuTask);
