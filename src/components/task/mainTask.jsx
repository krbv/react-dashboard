import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

/* MAIN ITEMS */
import ModalWindow from "../main/modalWindow";
import Switcher from "../main/switcher";
import ActiveTab from "../main/activeTab";
import Pages from "../main/pages";
/* PAGES */
import ListTask from "./pages/listTask";
import SingleTask from "./pages/singleTask/";
/* FILTERS AND VIEWS */
import Filters from "./activeTab/filtersTask";
import Views from "./activeTab/viewsTask";

class MainTask extends Component {
  path = "";

  componentWillMount() {
    this.path = this.props.match.path;
  }
  getfilterPath(filterPath) {
    return this.path + ":filter(" + filterPath + "):separator(|/):tid(|\\d+)";
  }

  render() {
    return (
      <main>
        <ModalWindow />
        <Switcher />
        <ActiveTab filterComponent={<Filters />} viewComponent={<Views />} />

        {this.props.filters.filtersList.map((filter, i) => (
          <Route
            exact
            strict
            key={i}
            path={this.getfilterPath(filter.path)}
            render={({ match }) => (
              <Pages
                pageComponent={[
                  <ListTask
                    key="list"
                    url={this.path + match.params.filter}
                    match={match}
                    isTaskOpen={match.params.tid && true}
                    filter={filter}
                  />,
                  match.params.tid && (
                    <SingleTask
                      url={this.path + match.params.filter}
                      tid={match.params.tid}
                      key="task"
                    />
                  )
                ]}
              />
            )}
          />
        ))}
      </main>
    );
  }
}

export default connect(state => ({
  filters: state.taskFilter
}))(MainTask);
