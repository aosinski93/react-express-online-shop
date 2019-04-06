import { combineReducers } from "redux";
import userReducer from "./userReducer.js";
import panelReducer from "./panelReducer";

export default combineReducers({
  user: userReducer,
  panel: panelReducer
});
