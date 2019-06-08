import { TOGGLE_DRAWER } from "./types";

export const toggleDrawer = () => dispatch => {
    return dispatch({
        type: TOGGLE_DRAWER
    })
}