import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MenuTaskRow extends Component {
  listRender() {
    const path = this.props.pathPrefix;
    return this.props.menu.list.map((item, i) => {
      return (
        <Link key={"mpath-" + i} to={path + item.path}>
          <li className={item.active ? "active" : ""}>
            {item.span && <span className={item.span} />}
            {item.name}
            {item.num && <div className="info num">{item.num}</div>}

            {item.icon && (
              <i className={item.icon.icon + " info iicon rcolor"} />
            )}
          </li>
        </Link>
      );
    });
  }

  render() {
    return (
      <section>
        <h2 className="group-name">{this.props.menu.title}</h2>
        <ul>{this.listRender()}</ul>
      </section>
    );
  }
}
