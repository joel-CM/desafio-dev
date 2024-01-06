import client from "../../graphql/config"
import * as querys from "../../graphql/querys"
import * as types from "../types"

export const getAllCharacters = async (dispatch) => {
    // set loadingCharacters to true
    dispatch({
        type: types.SET_LOADING_CHARACTERS_TYPE,
        payload: true
    })

    // fetching data
    const { data } = await client.query({
        query: querys.GET_ALL_CHARACTERS_QUERY,
    })

    // set characters data to context
    dispatch({
        type: types.GET_ALL_CHARACTERS_TYPE,
        payload: data.characters.results
    })

    // set loadingCharacters to false
    dispatch({
        type: types.SET_LOADING_CHARACTERS_TYPE,
        payload: false
    })
}


export const getCharacterByName = async (dispatch, data) => {
    const { data: d } = await client.query({
        query: querys.GET_CHARACTER_BY_NAME,
        variables: data.variables
    })

    dispatch({
        type: types.GET_CHARACTERS_BY_NAME_TYPE,
        payload: d.characters.results
    })
}