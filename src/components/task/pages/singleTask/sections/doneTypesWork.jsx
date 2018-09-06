import React from "react";

export default ({ types }) => {
  return (
    <section className="done-types extrapad __btop list-margin">
      <h3 className="section-title">Выполненные работы</h3>
      <ul>
        {types.map((item, i) => (
          <li key={i}>
            {item.name} — {item.value}
          </li>
        ))}
      </ul>
    </section>
  );
};
