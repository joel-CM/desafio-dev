import * as types from "./types"

export const setShowDetailModal = (dispatch) => {
    dispatch({
        type: types.SET_SHOW_DETAIL_MODAL,
        payload: true
    })
}

export const setHideDetailModal = (dispatch) => {
    dispatch({
        type: types.SET_HIDE_DETAIL_MODAL,
        payload: false
    })
}