const initialState = {
  total: null,
  current: 1,
  begin: 0,
  end: 18,
  onPage: 18
};

export default function(state = initialState, action) {
  //return state.payload;

  switch (action.type) {
    case "SET_TOTAL_TASK_PAGINATION":
      return { ...state, total: action.payload };
    case "CHANGE_TASK_PAGINATION":
      return Object.assign({}, state, action.payload);
    case "RESET_TASK_PAGINATION":
      return Object.assign({}, state, {
        current: initialState.current,
        begin: initialState.begin,
        end: initialState.end
      });
    default:
  }

  return state;
}
