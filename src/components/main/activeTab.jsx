import React, { Component } from "react";

import { connect } from "react-redux";

class ActiveTab extends Component {
  getFilters() {
    if (typeof this.props.filterComponent === "object") {
      return this.props.filterComponent;
    }
  }

  getViews() {
    if (typeof this.props.viewComponent === "object") {
      return this.props.viewComponent;
    }
  }

  render() {
    return (
      <section className="tab-active">
        <div className="edges">
          <div className="filters icons">{this.getFilters()}</div>
          <div className="title">
            <h1>{this.props.tab.title}</h1>
          </div>
          <div className="view icons">{this.getViews()}</div>
        </div>
      </section>
    );
  }
}

export default connect(state => ({
  tab: state.main
}))(ActiveTab);
