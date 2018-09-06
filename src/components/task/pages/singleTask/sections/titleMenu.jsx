import React, { Component } from "react";

export default class TitleMenu extends Component {
  state = {
    isMenuOpen: false
  };

  openMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  componentWillReceiveProps() {
    this.setState({ isMenuOpen: false });
  }

  render() {
    return (
      <section className="title">
        <h1>{this.props.title}</h1>
        <button className="unimportant" onClick={this.openMenu}>
          редактировать
          <div
            className={
              (this.state.isMenuOpen ? "open" : "") + "  g-pmenu right-arrow"
            }
          >
            <ul>
              <li className="withimg">
                <i className="iicon config" /> Редактировать условия
              </li>
              <li className="withimg">
                <i className="iicon comment" /> Написать комментарий
              </li>
              <li className="withimg">
                <i className="iicon delete" /> Удалить задачу
              </li>{" "}
              <li className="withimg">
                <i className="iicon edit" /> Внести правки
              </li>
            </ul>
          </div>
        </button>
      </section>
    );
  }
}
