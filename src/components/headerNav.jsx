import React, { Component } from "react";

import { connect } from "react-redux";

class HeaderNav extends Component {
  openMainMenu = () => {
    this.props.onOpenMaingMenu(!this.props.isMainMenuOpen);
  };
  openConfigMenu = () => {
    this.props.onOpenConfigMenu(!this.props.isConfigMenuOpen);
  };

  render() {
    return (
      <div id="top-menu">
        <div className="menu" onClick={this.openMainMenu}>
          <i className="iicon menu rcolor bigger" />
        </div>
        <div className="modtitle">Задачи</div>
        <div className="search">
          <input type="text" placeholder="Поиск в задачах" />
          <span className="wrapsearch">
            <i className="iicon search rcolor" />
          </span>
        </div>
        <div className="config" onClick={this.openConfigMenu}>
          <i className="iicon threedots rcolor bigger" />
          <img
            className="userava"
            alt="Настройки"
            src={this.props.user.avatar}
          />

          <div
            className={
              (this.props.isConfigMenuOpen ? "open" : "") +
              " g-pmenu right-arrow"
            }
          >
            <ul>
              <li className="withimg">
                <img alt="" src={this.props.user.avatar} />
                {this.props.user.name}
              </li>
              <li className="withimg">
                <i className="iicon config" /> Настройки
              </li>
              <li className="withimg">
                <i className="iicon poweroff" />
                Выход
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
    isConfigMenuOpen: state.windows.config,
    isMainMenuOpen: state.windows.menu
  }),
  dispatch => ({
    onOpenMaingMenu: val => {
      dispatch({
        type: "CHANGE_WINDOW_MENU",
        payload: val
      });
    },
    onOpenConfigMenu: val => {
      dispatch({
        type: "CHANGE_WINDOW_CONFIG",
        payload: val
      });
    }
  })
)(HeaderNav);
