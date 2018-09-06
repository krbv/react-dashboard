import React, { Component } from "react";

export default class Pagination extends Component {
  state = {
    liMax: 5,
    list: []
  };

  getList() {
    return this.state.liMax < this.props.total
      ? this.complicated()
      : this.simple();
  }

  simple() {
    const list = [];

    for (let i = 1; i <= this.props.total; i++) {
      list.push({
        key: i,
        value: i,
        isCurrent: i === this.props.current ? 1 : 0
      });
    }

    return list;
  }

  complicated() {
    const list = [];
    const { current, total } = this.props;
    const { liMax } = this.state;
    if (current > liMax) {
      list.push({
        key: 1,
        value: 1,
        isCurrent: 1 === current ? 1 : 0
      });
      list.push({ key: "...", value: current - liMax + 1 });
    }

    let start = current - liMax + list.length;
    if (start < 1) {
      start = 1;
    }
    const end = start + liMax - list.length + 1;

    for (let i = start; i < end; i++) {
      list.push({ key: i, value: i, isCurrent: i === current ? 1 : 0 });
    }

    if (current < total) {
      list.push({ key: "далее", value: current + 1, nextButton: 1 });
      list.push({ key: "..." + total, value: total });
    }

    return list;
  }

  getNav() {
    return this.getList().map(item => (
      <li
        onClick={() => this.props.callback(item.value)}
        className={item.isCurrent ? "current" : item.nextButton ? "next" : ""}
        key={item.key}
      >
        {item.key}
        {item.nextButton && <i className="iicon twoarrows " />}
      </li>
    ));
  }

  render() {
    return (
      <section className="pagination">
        <ul>{this.getNav()}</ul>
      </section>
    );
  }
}
