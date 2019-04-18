import { combineReducers } from "redux";
import userReducer from "./userReducer.js";
import panelReducer from "./panelReducer";
import notificationReducer from "./notificationReducer";

export default combineReducers({
  user: userReducer,
  panel: panelReducer,
  notifications: notificationReducer
});
