const initialState = {
  0: { name: "ожидание", type: "wait" },
  1: { name: "выполняется", type: "run" },
  2: { name: "ошибка", type: "error" },
  3: { name: "выполнено", type: "done" },
  4: { name: "архивные", type: "archive" }
};

export default function(state = initialState, action) {
  return state;
}
