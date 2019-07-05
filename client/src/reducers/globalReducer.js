import {TOGGLE_DRAWER, DB_ERROR, FETCH_DUMMY_DATA} from "../actions/types";

const initialState = {
    drawerIsVisible: false,
    dbError: false,
    dummyData: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_DRAWER:
            return {
                ...state,
                drawerIsVisible: !state.drawerIsVisible
            };
        case DB_ERROR:
            return {
                ...state,
                dbError: true
            };
        case FETCH_DUMMY_DATA:
            return {
                ...state,
                dummyData: action.payload
            }
        default:
            return state;
    }
};
