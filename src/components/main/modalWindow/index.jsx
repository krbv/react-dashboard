import React, { Component } from "react";
import { connect } from "react-redux";
//import AddTask from "./addTask";
import Loadable from "react-loadable";

const loading = <div>Подождите идет загрузка ...</div>;

const LoadableComponent = {
  ADDTASK: Loadable({
    loader: () => import("./addTask"),
    loading() {
      return loading;
    }
  })
};

class ModalWindow extends Component {
  componentDidUpdate() {
    if (this.props.windowName) this.props.onFadeinBodyShadow();
  }

  close = () => {
    this.props.onCloseWindow();
  };

  renderSetWindow() {
    if (this.props.windowName) {
      switch (this.props.windowName.toUpperCase()) {
        case "ADDTASK":
          return <LoadableComponent.ADDTASK />;
        default:
      }
    }
    return null;
  }

  render() {
    return (
      <section className={"mwindow " + (this.props.windowName ? "shown" : "")}>
        <i className="iicon close big" onClick={this.close} />
        <div className="wrap">{this.renderSetWindow()}</div>
      </section>
    );
  }
}

export default connect(
  state => ({
    windowName: state.windows.modalWindow
  }),
  dispatch => ({
    onFadeinBodyShadow: () => {
      dispatch({
        type: "FADEIN_BODY_SHADOW"
      });
    },
    onCloseWindow: () => {
      dispatch({
        type: "CLOSE_MODAL_WINDOW"
      });
    }
  })
)(ModalWindow);
