import { FETCH_ACTIVE_PRODUCTS, FETCH_HOT_DEALS } from "../actions/types";

const initialState = {
    activeProducts: [],
    hotDeals: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ACTIVE_PRODUCTS: {
            return {
                ...state,
                activeProducts: action.payload
            }
        }
        case FETCH_HOT_DEALS: {
            return {
                ...state,
                hotDeals: [state.activeProducts[0], state.activeProducts[1]]
            }
        }
        default: {
            return state
        }
    }
}