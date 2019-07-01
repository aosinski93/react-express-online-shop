import { combineReducers } from "redux";
import userReducer from "./userReducer.js";
import panelReducer from "./panelReducer";
import notificationReducer from "./notificationReducer";
import globalReducer from './globalReducer';
import frontReducer from "./frontReducer";

export default combineReducers({
  user: userReducer,
  front: frontReducer,
  panel: panelReducer,
  notifications: notificationReducer,
  global: globalReducer
});
