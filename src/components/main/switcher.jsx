import React, { Component } from "react";

export default class Switcher extends Component {
  render() {
    return (
      <section className="tabs-switcher">
        <ul className="wrap">
          <li className="active">
            <span className="name">Мои задачи</span>
            <span className="closewrap">
              <i className="iicon close small rcolor" />
            </span>
          </li>
          <li>
            <span className="name">На выполнении</span>
            <span className="closewrap">
              <i className="iicon close small rcolor" />
            </span>
          </li>
          <li>
            <span className="name">Шаблоны задач еще тестываыва ыв</span>
            <span className="closewrap">
              <i className="iicon close small rcolor" />
            </span>
          </li>
          <li>
            <span className="name">Задача №1242</span>
            <span className="closewrap">
              <i className="iicon close small rcolor" />
            </span>
          </li>
          <li className="all">
            <i className="iicon twoarrows rcolor" />
          </li>
        </ul>
      </section>
    );
  }
}
