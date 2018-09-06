import React, { Component } from "react";
import { connect } from "react-redux";

import ErrorMessage from "./messages/error";
import DoneMessage from "./messages/done";

import EventLogSection from "./sections/eventLog";
import InfoSection from "./sections/info";
import TitleMenuSection from "./sections/titleMenu";
import BasicDataSection from "./sections/basicData";
import EditedPagesSection from "./sections/editedPages";
import DoneTypesWork from "./sections/doneTypesWork";
import ChatSection from "./sections/chat";

class ContentTask extends Component {
  state = {
    isConditionsOpen: false
  };

  openConditions = () => {
    this.setState({ isConditionsOpen: true });
  };

  renderCondtions(task) {
    return this.state.isConditionsOpen ? (
      <BasicDataSection task={task} />
    ) : (
      <section
        className="open-conditions __btop "
        onClick={this.openConditions}
      >
        показать условия задачи
      </section>
    );
  }

  renderFinshed(task) {
    return (
      <React.Fragment>
        <section className=" statcolor-done">Задание было выполнено.</section>
        {task.done.message && (
          <DoneMessage msg={task.done.message} files={task.done.attached} />
        )}
        {this.renderCondtions(task)}

        {task.done.edited && <EditedPagesSection pages={task.done.edited} />}

        {task.done.types && <DoneTypesWork types={task.done.types} />}
      </React.Fragment>
    );
  }

  renderIncomplete(task) {
    return (
      <React.Fragment>
        {task.status === 2 && <ErrorMessage msg={task.hasProblem} />}
        <BasicDataSection task={task} />
        <EventLogSection />
        <ChatSection />
      </React.Fragment>
    );
  }

  render() {
    const { status } = this.props;
    const { task } = this.props;

    return (
      <React.Fragment>
        <InfoSection
          tid={task.id}
          status={{
            type: status[task.status].type,
            name: status[task.status].name
          }}
          typeTask={
            task.express ? "_express" : task.priority ? "_priority" : ""
          }
          created={task.date.create}
        />

        <TitleMenuSection title={task.title} />

        {task.status < 3
          ? this.renderIncomplete(task)
          : this.renderFinshed(task)}
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  status: state.taskStatus
}))(ContentTask);
