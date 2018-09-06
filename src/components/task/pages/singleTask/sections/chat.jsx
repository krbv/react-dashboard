import React, { Component } from "react";
import { connect } from "react-redux";

class ChatSection extends Component {
  state = {
    isAddButtonShown: false
  };

  onFocus = () => {
    this.setState({ isAddButtonShown: 1 });
  };

  onBlur = () => {
    this.setState({ isAddButtonShown: 0 });
  };

  render() {
    return (
      <section className="chat ">
        <div className="add">
          <div className="styleform">
            <img src={this.props.user.avatar} alt="" />
            <textarea
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              placeholder="Напишите комментарий"
            />
          </div>
          <div
            className={
              "send-fields " + (this.state.isAddButtonShown ? "open" : "")
            }
          >
            <div className="attach">
              <i className="iicon attach small" /> &nbsp;
              <span className="jslink">прикрепить файлы</span>
            </div>
            <button>Отправить</button>
          </div>
        </div>

        <div className="messages">
          <div className="message">
            <div className="name">Управление по управлению управлениями</div>
            <div className="date">23.08.2018</div>
            <img className="avatar" src="/i/a/default.png" alt="" />
            <div className="text">
              Поле значение убрано из обязательных. Хорошо проверить не приведет
              ли это к багам и завершить задачу. 20 мин
              <ul className="files">
                <li>
                  <a href="" target="_blank">
                    загрузки.jpg
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    документы на офис.zip
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    загрузки.jpg
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    загрузки.jpg
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    загрузки.jpg
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    документы на офис.zip
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    документы на офис.zip
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="message support">
            <div className="name">Валентина</div>
            <div className="date">23.08.2018</div>

            <img className="avatar" src="/i/a/support.png" alt="" />
            <div className="text">
              Поле значение убрано из обязательных. Хорошо проверить не приведет
              ли это к багам и завершить задачу. 20 мин
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(state => ({
  user: state.user
}))(ChatSection);
