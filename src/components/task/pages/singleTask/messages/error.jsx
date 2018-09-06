import React from "react";

export default ({ msg }) => {
  return (
    <section className="statcolor-error">
      Внимание! выполнение задачи приостановлено, причина:
      <br />
      {" " + msg}
    </section>
  );
};
