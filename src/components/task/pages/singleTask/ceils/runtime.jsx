import React from "react";
import Moment from "react-moment";
import "moment-timezone";

export default ({ start, end }) => {
  return (
    <div className="ceil dates">
      <div className="flexwrap">
        <div className="key">Реализация</div>
        <div className="value">
          <Moment format="DD.MM.YYYY" unix>
            {start}
          </Moment>
          —
          <Moment format="DD.MM.YYYY HH:MM" unix>
            {end}
          </Moment>
        </div>
      </div>
    </div>
  );
};
