import * as types from "../types"


export default function modalReducer(state, action) {
    const { type, payload } = action;

    switch (type) {
        case types.SET_SHOW_DETAIL_MODAL:
            return {
                ...state,
                show: payload
            }
        case types.SET_HIDE_DETAIL_MODAL:
            return {
                ...state,
                show: payload
            }
        default:
            return state;
    }
}