const initialState = {
  bodyShadow: false,
  config: false,
  //search: false,
  //popup: false,
  menu: false,
  modalWindow: null
};

export default function(state = initialState, action) {
  if (action.type === "CHANGE_WINDOW_CONFIG") {
    return { ...state, config: Boolean(action.payload) };
  } else if (action.type === "CHANGE_WINDOW_MENU") {
    return { ...state, menu: Boolean(action.payload) };
  } else if (action.type === "SET_MODAL_WINDOW") {
    return { ...state, modalWindow: action.payload };
  } else if (action.type === "FADEIN_BODY_SHADOW") {
    return { ...state, bodyShadow: true };
  } else if (action.type === "FADEOUT_BODY_SHADOW") {
    return { ...state, bodyShadow: false };
  } else if (action.type === "CLOSE_MODAL_WINDOW") {
    return Object.assign({}, state, {
      bodyShadow: false,
      modalWindow: null
    });
  }
  return state;
}
