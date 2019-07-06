import {
  FETCH_PANEL_MENU,
  ADD_MENU_ITEM,
  ADD_MENU_SUBCATEGORY,
  DELETE_MENU_ITEM,
  DELETE_MENU_SUBCATEGORY,
  FILTER_PRODUCTS,
  FETCH_USERS,
  TOGGLE_ADMIN,
} from '../actions/types';

const initialState = {
  menu: [],
  filteredProducts: [],
  addedSubcategory: {},
  users: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PANEL_MENU:
      return {
        ...state,
        menu: action.payload
      };
    case ADD_MENU_ITEM:
      return {
        ...state,
        menu: [...state.menu, action.payload],
        addedSubcategory: {}
      };
    case ADD_MENU_SUBCATEGORY:
      return {
        ...state,
        addedSubcategory: action.payload
      };
    case DELETE_MENU_ITEM:
      let menuItemsUpdate = Object.assign([], state.menu);

      menuItemsUpdate = menuItemsUpdate.filter(
        menuItem => menuItem._id !== action.payload._id
      );
      return {
        ...state,
        menu: menuItemsUpdate,
        addedSubcategory: {}
      };
    case DELETE_MENU_SUBCATEGORY:
      let menu = Object.assign([], state.menu);

      let newMenu = menu.map(menuItem => {
        if (menuItem._id === action.payload.parentId) {
          menuItem.subcategories = menuItem.subcategories.filter(
            subcategory => subcategory._id !== action.payload._id
          );
        }
        return menuItem;
      });
      return {
        ...state,
        menu: newMenu,
        addedSubcategory: {}
      };

    case FILTER_PRODUCTS:
      return {
        ...state,
        filteredProducts:
          action.payload === ''
            ? state.products
            : state.products.filter(
                product => product.manufacturer.name === action.payload
              )
      };
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload
      };
    case TOGGLE_ADMIN:
      return {
        ...state,
        users: state.users.map(user => {
          if (user._id === action.payload) {
            return (user = {
              ...user,
              isAdmin: !user.isAdmin
            });
          }
          return user;
        })
      };
    default:
      return state;
  }
};
