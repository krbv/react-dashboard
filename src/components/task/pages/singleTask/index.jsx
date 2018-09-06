import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ContentPlaceholder from "../../../../containers/placeholders/taskPlaceholder";
import { getTask } from "../../../../actions/tasks";

//import "moment-timezone";

import TaskContent from "./content";

class SingleTask extends Component {
  currentDataTask = null;
  prevTitle = "";

  setTitle(title) {
    this.props.onSetTitle(title);
  }

  scrollNaddHeight = () => {
    const refName = "taskWindow";
    if (this.refs[refName]) {
      const wrapEl = document.querySelector(".tab-content .wrap");
      const sizes = this.refs[refName].getBoundingClientRect();
      wrapEl.style["min-height"] = sizes.height + "px";
      if (sizes.top < 0) {
        wrapEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  refresh() {
    this.scrollNaddHeight();
    this.setTitle("Задача №" + this.props.tid);
  }

  componentWillMount() {
    this.prevTitle = this.props.title;
  }
  componentDidMount() {
    this.refresh();
  }
  componentDidUpdate() {
    this.refresh();
  }

  componentWillUnmount() {
    this.setTitle(this.prevTitle);
  }

  render() {
    const { tid, task, url } = this.props;
    if (!task[tid]) {
      this.props.onGetTask(tid);
    }
    return (
      <section className="task-upper-window" ref="taskWindow">
        <article className="task">
          <section className="close">
            <Link to={url}>
              <i className="iicon close big" />
            </Link>
          </section>
          {task[tid] ? (
            <TaskContent task={task[tid]} />
          ) : (
            <ContentPlaceholder />
          )}
        </article>
      </section>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
    title: state.main.title,
    task: state.taskSingle
  }),
  dispatch => ({
    onGetTask: tid => {
      dispatch(getTask(tid));
    },
    onSetTitle: title => {
      dispatch({
        type: "SET_TITLE",
        payload: title
      });
    }
  })
)(SingleTask);
