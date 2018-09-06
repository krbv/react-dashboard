import React from "react";

import Listing from "../../../../../containers/listing";

export default ({ pages }) => {
  return (
    <section className="done-types extrapad  list-margin">
      <h3 className="section-title">Отредактированы страницы</h3>
      <Listing items={pages} />
    </section>
  );
};
