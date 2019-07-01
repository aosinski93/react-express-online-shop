import {FETCH_ACTIVE_PRODUCTS, FETCH_HOT_DEALS, NOTIFY_ERROR} from "./types";

export const fetchActiveProducts = () => dispatch => {
    let url = '/products';

    fetch(url, {
        method: "GET"
    })
        .then(res => res.json())
        .then(activeProducts => {
            dispatch({
                type: FETCH_ACTIVE_PRODUCTS,
                payload: activeProducts
            })
        })
        .then(() => {
            dispatch({
                type: FETCH_HOT_DEALS
            })
        })
        .catch(err => {
            dispatch({
                type: NOTIFY_ERROR,
                payload: `Error when fetching products, details: ${err.message}`
            })
        })
};