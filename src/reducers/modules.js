const initialState = [
  {
    url: "/task",
    icon: "task",
    name: "Задачи",
    active: false
  },
  {
    url: "/sticker",
    icon: "sticker",
    name: "Заметки",
    active: false
  },
  {
    url: "/calendar",
    icon: "calendar",
    name: "Календарь",
    active: false
  },
  {
    url: "/editor",
    icon: "editor",
    name: "Контент менеджер",
    active: false
  }
];

/* <li>Контакты</li>
        <li>Календарь</li>
        <li>Закладки</li>
        <li>Файлы</li>
        <li>Соцсети</li> 
        <li>Сервис {/* whois, доступность, скорость, загрузки </li>*/

export default function(state = initialState, action) {
  switch (action.type) {
    case "SWITCH_ACTIVE_MODULE":
      return state.map(item => {
        return {
          ...item,
          active: action.payload === item.url ? true : false
        };
      });
    default:
  }

  return state;
}
