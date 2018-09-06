import React, { Component } from "react";

export default class IconPanel extends Component {
  render() {
    return (
      <div id="iconpanel" className="expand">
        <div className="wrap">
          <div className="button expand-button">
            <i className="iicon twoarrows big" />
          </div>
          <div className="button chat">
            <i className="iicon chat" />
          </div>
          <div className="button config">
            <i className="iicon config" />
          </div>
          <div className="button manual">
            <i className="iicon help" />
          </div>
          <div className="button light">
            <i className="iicon moon" />
          </div>
        </div>
      </div>
    );
  }
}
