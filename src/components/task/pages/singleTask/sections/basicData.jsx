import React from "react";

import ListCeil from "../ceils/list";
import RuntimeCeil from "../ceils/runtime";

export default ({ task }) => {
  return (
    <section className="review extrapad">
      <div className="ceil description">
        <div className="flexwrap">
          <div className="key">Описание</div>
          <div className="value">{task.description}</div>
        </div>
      </div>

      <ListCeil
        clname="urls"
        title="Страницы"
        emptyMsg="не указаны"
        list={task.links}
      />

      <RuntimeCeil start={task.date.start} end={task.date.end} />

      <ListCeil
        clname="files"
        title="Вложения"
        emptyMsg="не загружены"
        list={task.attachments}
      />
    </section>
  );
};
