import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

import "moment-timezone";

import Notice from "./markers/notice";
import Express from "./markers/express";
import Priority from "./markers/priority";

export default class RowTask extends Component {
  render() {
    const { task, status, urlPrefix, active } = this.props;

    return (
      <Link key={task.id} to={urlPrefix + "/" + task.id}>
        <div className={"item " + (active ? "active" : "")} key={task.id}>
          <div className="id">{task.id}</div>
          <div
            className={"status statcolor-after-" + status[task.status].type}
          />
          <div className="title">{task.title}</div>
          <div className="marker ">
            {task.express ? (
              <Express />
            ) : (
              task.priority === true && <Priority />
            )}

            {task.notice === true && <Notice />}
          </div>
          <div className="created-date">
            <Moment format="DD.MM.YYYY" unix>
              {task.date.create}
            </Moment>
          </div>
          <div className="due-date">
            <Moment format="DD.MM.YYYY" unix>
              {task.date.end}
            </Moment>
          </div>
        </div>
      </Link>
    );
  }
}
