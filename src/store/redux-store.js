import {combineReducers, createStore} from "redux";
import editStylesReducer from "./EditorStyles/EditStylesReducer";

const reducers = combineReducers({
  edit: editStylesReducer,
});

const store = createStore(reducers);

export default store;