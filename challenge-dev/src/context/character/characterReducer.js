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
        case types.SET_SEARCH_BY_NAME:
            return {
                ...state,
                searchByName: payload
            }
        case types.SET_NEW_FILTERS_TYPE:
            return {
                ...state,
                filters: {
                    ...payload
                }
            }
        case types.FILTER_CHARACTERS_TYPE:
            return {
                ...state,
                characters: payload
            }
        case types.RESET_ALL_FILTERS_TYPE:
            return {
                ...state,
                ...payload
            }
        default:
            return state;
    }
}