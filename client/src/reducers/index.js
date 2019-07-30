import { combineReducers } from 'redux';
import userReducer from './userReducer.js';
import panelReducer from './panelReducer';
import notificationReducer from './notificationReducer';
import globalReducer from './globalReducer';
import cartReducer from './cartReducer';
import favouritesReducer from './favouritesReducer.js';

export default combineReducers({
  user: userReducer,
  panel: panelReducer,
  notifications: notificationReducer,
  global: globalReducer,
  cart: cartReducer,
  favourites: favouritesReducer
});
