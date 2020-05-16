import {
  SET_COLOR,
  SET_BACKGROUND,
  SET_FONTSIZE,
} from "./../actions";

// TODO: delete hardcoded initialState password and userName
const initialState = {
  fontColor: '',
  backgroundColor: '',
  fontSize: 16,
};

const editStylesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLOR: {
      return { ...state, fontColor: action.payload };
    }
    case SET_BACKGROUND: {
      return { ...state, backgroundColor: action.payload };
    }
    case SET_FONTSIZE: {
      return { ...state, fontSize: action.payload };
    }
    default:
      return state;
  }
};

export default editStylesReducer;
