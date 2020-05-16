import {
  SET_COLOR,
  SET_BACKGROUND,
  SET_FONTSIZE,
  SET_TEXT,
} from "./../actions";

// TODO: delete hardcoded initialState password and userName
const initialState = {
  fontColor: '',
  backgroundColor: '',
  fontSize: 16,
  newText: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
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
    case SET_TEXT: {
      return { ...state, newText: action.payload };
    }
    default:
      return state;
  }
};

export default editStylesReducer;
