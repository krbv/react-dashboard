import React, { Component } from "react";

import { connect } from "react-redux";

class FilterTask extends Component {
  state = {
    isMenuOpen: false
  };

  openMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  onlyCurrentUid = val => {
    if (val) {
      this.props.onSetUserTask();
    } else {
      this.props.onSetGroupTask();
    }
    this.openMenu();
  };

  render() {
    return (
      <React.Fragment>
        <div className="tag">
          <i className="iicon tag rcolor" onClick={this.openMenu} />
          <div
            className={
              (this.state.isMenuOpen ? "open" : "") + "  g-pmenu left-arrow"
            }
          >
            <ul>
              <label>
                <li>
                  <input
                    name="creator"
                    type="radio"
                    defaultChecked
                    onClick={() => this.onlyCurrentUid(1)}
                  />
                  только ваши задачи
                </li>
              </label>
              <label>
                <li>
                  <input
                    name="creator"
                    type="radio"
                    onClick={() => this.onlyCurrentUid(0)}
                  />
                  от всех пользователей
                </li>
              </label>
            </ul>
          </div>
        </div>
        {/* <div className="sort">
          <i className="iicon tag rcolor" />
        </div> */}
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    onSetUserTask: () => {
      dispatch({
        type: "SET_USER_CREATER_TASKS"
      });
    },
    onSetGroupTask: () => {
      dispatch({
        type: "SET_GROUP_CREATER_TASKS"
      });
    }
  })
)(FilterTask);
