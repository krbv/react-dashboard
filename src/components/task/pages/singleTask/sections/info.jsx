import React from "react";
import Moment from "react-moment";
import "moment-timezone";

export default ({ tid, status, created, typeTask }) => (
  <section className="info">
    <div className="number">№{tid}</div>
    <div className={"status statcolor-" + status.type}>{status.name}</div>
    <div className={" type g-type-task " + typeTask + " _text"} />
    <div className="created" title="дата создания задачи">
      <i className="iicon clock small" />
      <Moment className="date" format="DD.MM.YYYY " unix>
        {created}
      </Moment>
      <Moment className="hours" format="HH:MM " unix>
        {created}
      </Moment>
    </div>
    <div className="space" />
  </section>
);
