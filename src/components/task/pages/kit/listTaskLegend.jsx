import React from "react";

export default () => (
  <div className="item legend">
    <div className="id">№</div>
    <div className="status ">Статус</div>
    <div className="title">Заголовок</div>
    <div className="marker ">Ярлык</div>
    <div className="created-date">Дата создания</div>
    <div className="due-date">
      Завершить <span className="hide-sm">до</span>
    </div>
  </div>
);
