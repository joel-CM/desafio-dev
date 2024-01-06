import * as types from "../types";

export default (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.GET_ALL_CHARACTERS_TYPE:
            return {
                ...state,
                characters: payload
            }
        case types.SET_LOADING_CHARACTERS_TYPE:
            return {
                ...state,
                loadingCharacters: payload
            }
        case types.GET_CHARACTERS_BY_NAME_TYPE:
            return {
                ...state,
                characters: payload
            }
        default:
            return state;
    }
}