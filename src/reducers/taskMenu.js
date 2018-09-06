const initialState = {
  mains: {
    title: "Задачи",
    list: [
      {
        name: "Все задачи",
        path: "/all",
        //filter: "default",
        active: true
      },
      {
        name: "Задачи в очереди",
        //filter: "line",
        path: "/line"
      },
      {
        name: "На выполнении",
        //filter: "run",
        path: "/run"
      },
      {
        name: "Возникла ошибка",
        //filter: "error",
        path: "/error",
        num: "+1"
      },
      {
        name: "Выполненные",
        //filter: "done",
        path: "/done"
      },
      {
        name: "Архивные",
        //filter: "archive",
        path: "/archive"
      }
    ]
  },
  labels: {
    title: "Ярлыки",
    list: [
      {
        name: "Экспресс",
        path: "/express",
        num: "0/2",
        span: "marker g-type-task _express _bg"
      },
      {
        name: "Приоритетные",
        path: "/priority",
        num: "2/10",
        span: "marker g-type-task _priority _bg"
      }
    ]
  },
  others: {
    title: "ДРУГОЕ",
    list: [
      {
        name: "Календарь",
        path: "/calendar"
      },
      {
        name: "Шаблоны задач",
        path: "/pattern",
        icon: {
          icon: "plus",
          onclick: "addTask"
        }
      },
      {
        name: "Статистика",
        path: "/stat"
      },
      {
        name: "Настройки (пользователи)",
        path: "/config"
      }
    ]
  }
};

export default function(state = initialState, action) {
  return state;
}
