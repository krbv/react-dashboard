import React from "react";

import Listing from "../../../../../containers/listing";

export default ({ title, list, clname, emptyMsg }) => {
  return (
    <div className={"ceil " + clname}>
      <div className="flexwrap">
        <div className="key">{title}</div>
        <div className="value">
          {list.length ? <Listing items={list} /> : emptyMsg}
        </div>
      </div>
    </div>
  );
};
