const initialState = {
  onlyCurrentUID: 1, // выстановить всплавающее окно - запомнить выбор

  filtersList: [
    {
      path: "/all",
      title: "Все задачи",
      statuses: {
        0: true,
        1: true,
        2: true,
        3: true
      }
    },

    {
      path: "/line",
      title: "Задачи ожидающие выполнения",
      statuses: {
        0: true
      }
    },

    {
      path: "/run",
      title: "Задачи на выполнении",
      statuses: {
        1: true
      }
    },

    {
      path: "/error",
      title: "Входе выполнения возникла ошбика",
      statuses: {
        2: true
      }
    },
    {
      path: "/done",
      title: "Завершенные задачи",
      statuses: {
        3: true
      }
    },

    {
      path: "/express",
      title: "Экспресс задачи",
      statuses: {
        0: true,
        1: true,
        2: true,
        3: true,
        4: true
      },
      list: {
        express: true
      }
    },

    {
      path: "/priority",
      line: "Приоритетные задачи",
      statuses: {
        0: true,
        1: true,
        2: true,
        3: true,
        4: true
      },
      list: {
        express: false,
        priority: true
      }
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_USER_CREATER_TASKS":
      return { ...state, onlyCurrentUID: 1 };
    case "SET_GROUP_CREATER_TASKS":
      return { ...state, onlyCurrentUID: 0 };
    default:
  }

  return state;
}
