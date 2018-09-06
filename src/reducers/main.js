const initialState = {
  tabs: [],
  title: ""
  //refs: { sdsd: "sdf" }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.payload };

    default:
  }

  return state;
}
