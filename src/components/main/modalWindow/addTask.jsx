import React, { Component } from "react";
//import { connect } from "react-redux";

export default class addTask extends Component {
  render() {
    return (
      <section className="addtask">
        <header>
          <h1 className="title">Добавить задачу</h1>
        </header>

        <section className="content">
          <div className="scroll styleform">
            <div className="fieldset">
              <label>Название задания</label>
              <div className="inp">
                <input type="text" />
              </div>
            </div>
            <div className="fieldset">
              <label>Описание</label>
              <div className="inp">
                <textarea name="" />
              </div>
            </div>
            <div className="fieldset">
              <label>Приложить файлы</label>
              <div className="inp">
                <span>
                  <input
                    className="dropfile"
                    type="text"
                    placeholder="нажмите или перенесети файлы"
                  />
                </span>
              </div>
            </div>
            <div className="fieldset">
              <label>Адреса страниц</label>
              <div className="inp">
                <input type="text" />
              </div>
            </div>

            <div className="fieldset">
              <label>Выполнить до</label>
              <div className="inp period">
                с <span className="jslink">сегодня</span> до{" "}
                <span className="jslink">15.05.2018</span>
              </div>
            </div>

            <div className="fieldset">
              <label>Приоритет</label>
              <div className="inp">
                <input type="checkbox" />
              </div>
            </div>
            <div className="fieldset">
              <label>Экспресс</label>
              <div className="inp">
                <input type="checkbox" />
              </div>
            </div>
            <div className="fieldset">
              <label>Скрыть</label>
              <div className="inp">
                <input type="checkbox" />
              </div>
            </div>
          </div>
        </section>
        <section className="buttons">
          <button className="unimportant left">дополнительно</button>
          <button>разместить</button>
        </section>
      </section>
    );
  }
}

// export default connect(
//   state => ({
//     modalWindowName: state.windows.modalWindow
//   }),
//   dispatch => ({
//     onFadeinBodyShadow: () => {
//       dispatch({
//         type: "FADEIN_BODY_SHADOW"
//       });
//     }
//   })
// )(ModalWindow);
