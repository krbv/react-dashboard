import React, { Component } from "react";
import { connect } from "react-redux";

import RowTask from "./kit/rowTask";
import Pagination from "../../main/pagination";

import ListTaskLegend from "./kit/listTaskLegend";

class ListTask extends Component {
  componentDidUpdate() {
    this.setTotalTask();
  }
  componentWillMount() {
    this.props.onResetPagination();
    this.props.onSetTitle(this.props.filter.title);
  }

  // setTitle(){

  // }

  pageChange = numPage => {
    const { onPage } = this.props.pagination;
    this.props.onChangePagination({
      current: numPage,
      begin: (numPage - 1) * onPage,
      end: numPage * onPage
    });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  setTotalTask() {
    const total = Math.ceil(
      this.props.tasks.length / this.props.pagination.onPage
    );
    if (this.props.pagination.total !== total) this.props.onSetTotalTask(total);
  }

  render() {
    const { status, pagination, url, match, isTaskOpen } = this.props;
    // console.log("render", match.params.tid);
    // console.log("render", task.id);
    const onePageTasks = this.props.tasks
      .slice(pagination.begin, pagination.end)
      .map(task => (
        <RowTask
          status={status}
          task={task}
          urlPrefix={url}
          key={task.id}
          active={Number(match.params.tid) === task.id && true}
        />
      ));

    return (
      <React.Fragment>
        <section className={"task-list " + (isTaskOpen ? "task-opened" : "")}>
          <div className="wrap list">
            <ListTaskLegend />

            {onePageTasks.length ? (
              onePageTasks
            ) : (
              <div className="empty-data" />
            )}
          </div>
        </section>
        {onePageTasks.length && (
          <Pagination
            callback={this.pageChange}
            total={pagination.total}
            current={pagination.current}
          />
        )}
        <button className="circle" id="addtask">
          <i className="iicon plus rcolor big" />
        </button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  status: state.taskStatus,
  pagination: state.taskPagination,
  tasks: state.taskList.filter(item => {
    const setFilter = ownProps.filter;
    //uid filter
    if (state.taskFilter.onlyCurrentUID && item.uid !== state.user.uid) {
      return 0;
    }
    //params filters
    if (
      setFilter.list &&
      !Object.keys(setFilter.list)
        .map(key => item[key] === setFilter.list[key])
        .every(Boolean)
    ) {
      return 0;
    }
    //status filter
    return setFilter.statuses[item.status];
  })
});

const mapDispatchToProps = dispatch => ({
  onSetTotalTask: val => {
    dispatch({
      type: "SET_TOTAL_TASK_PAGINATION",
      payload: val
    });
  },
  onChangePagination: data => {
    dispatch({
      type: "CHANGE_TASK_PAGINATION",
      payload: data
    });
  },
  onResetPagination: () => {
    dispatch({
      type: "RESET_TASK_PAGINATION"
    });
  },
  onSetTitle: title => {
    dispatch({
      type: "SET_TITLE",
      payload: title
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTask);
