import React, { Component } from "react";
import { connect } from "react-redux";

class ModuleNsav extends Component {
  closeMenu = () => {
    this.props.onCloseMenu();
  };

  render() {
    return (
      <section id="modules">
        <div className="wrap">
          <i className="iicon close big " onClick={this.closeMenu} />
          <div className="logo">
            ГЛ
            <span>АВРЕД</span>
          </div>
          <ul>
            {this.props.links.map((link, index) => (
              <li key={index}>
                <a
                  className={link.icon + (link.active ? " active" : "")}
                  href={link.url}
                >
                  <i className={link.icon + " block-icon iicon  rcolor big"} />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default connect(
  state => ({
    links: state.modules
  }),
  dispatch => ({
    onCloseMenu: () => {
      dispatch({
        type: "CHANGE_WINDOW_MENU",
        payload: false
      });
    }
  })
)(ModuleNsav);
