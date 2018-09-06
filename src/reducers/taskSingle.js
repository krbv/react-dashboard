const initialState = {
  21215: {
    id: 21211,
    status: 3,
    uid: 211,
    title: "Программа профилактики нарушений",
    express: true,
    priority: true,

    notice: false,
    hasProblem: "к заданию не приложены файлы",
    date: {
      create: 1534820985,
      start: 1534820985,
      end: 1534820985
    },

    description:
      'при создании страниц или правке поле разделитель в ссылках страниц должно быть пустым, а панель не дает оставить его пустым!! нужно чтобы было пустым иначе страница "едет". на картинках обведены разделители с пустым полем поправленным через базу (правильно) и с созданным через панель (неправильно)',
    links: [
      "http://www.site.com/portal/adm/uprr/83",
      "http://www.site.com/uprr/83",
      "http://www.site.com/323"
    ],
    attachments: [
      {
        name: "правильно.jpg",
        path: "111"
      },
      {
        name: "правильно2.jpg",
        path: "222"
      }
    ],
    events: [
      {
        name: "Задача была создана",
        time: "1534820985"
      },
      {
        name: "Перенесена дата окончания задачи",
        time: "1534820985"
      },
      {
        name: "Изменены условия задачи",
        time: "1534820985"
      },
      {
        name: "Задача была удалена",
        time: "1534820985"
      },
      {
        name: "Задача была выполнена",
        time: "1534820985"
      }
    ],
    done: {
      message: "Проверьте пожалуйста, форму. Скрины с настройками во вложении",
      attached: [{ name: "файл", link: "asda3qr23r" }],
      edited: [
        {
          name: "http://www.site.com/323 ",
          link: "42234"
        },
        {
          name: "http://www.site.com/uprr/83",
          link: "33565"
        }
      ],
      types: [
        {
          name: "загружено файлов",
          value: 2
        },
        {
          name: "проекты НПА",
          value: 1
        },
        {
          name: "редакция главной страницы",
          value: 1
        }
      ]
    },
    comments: []
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      return Object.assign({}, state, action.payload);
    default:
  }
  return state;
}
