import React from "react";

export default () => {
  return (
    <section className="timeline extrapad __btop">
      <h3 className="section-title">Лента событий</h3>
      <ul>
        <li>
          <span>08.03.2018</span> Задача была создана
        </li>
        <li>
          <span>06.06.2018</span> Перенесена дата окончания задачи
        </li>
        <li>
          <span>20.06.2018</span> Изменены условия задачи
        </li>
        <li>
          <span>09.04.2018</span> Задача была удалена
        </li>
        <li>
          <span>08.03.2018</span> Задача была выполнена
        </li>
      </ul>
    </section>
  );
};
