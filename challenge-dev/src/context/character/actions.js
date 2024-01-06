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
    // set the searched character in the context
    dispatch({
        type: types.SET_SEARCH_BY_NAME,
        payload: data.variables.name
    })

    const { data: d } = await client.query({
        query: querys.GET_CHARACTER_BY_NAME_QUERY,
        variables: data.variables
    })

    dispatch({
        type: types.GET_CHARACTERS_BY_NAME_TYPE,
        payload: d.characters.results
    })
}

export const filterCharacters = async (dispatch, data) => {
    // set loadingCharacters to true
    dispatch({
        type: types.SET_LOADING_CHARACTERS_TYPE,
        payload: true
    })

    // set new filters
    dispatch({
        type: types.SET_NEW_FILTERS_TYPE,
        payload: data.variables
    })

    // fetch data
    const { data: d } = await client.query({
        query: querys.FILTER_CHARACTERS_QUERY,
        variables: data.variables
    })

    // set filtered characters to context
    dispatch({
        type: types.FILTER_CHARACTERS_TYPE,
        payload: d.characters.results
    })

    // set loadingCharacters to false
    dispatch({
        type: types.SET_LOADING_CHARACTERS_TYPE,
        payload: false
    })
}

export const resetAllFilters = async (dispatch) => {
    // set to none all filters
    dispatch({
        type: types.RESET_ALL_FILTERS_TYPE,
        payload: {
            searchByName: "",
            filters: {
                status: "",
                specie: "",
                gender: ""
            }
        }
    })

    // get all characters
    await getAllCharacters(dispatch)
}