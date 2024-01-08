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

    // set characters total
    dispatch({
        type: types.SET_TOTAL_PAGES,
        payload: data.characters.info.pages
    })

    // set loadingCharacters to false
    dispatch({
        type: types.SET_LOADING_CHARACTERS_TYPE,
        payload: false
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

    // set new total pages
    dispatch({
        type: types.SET_TOTAL_PAGES,
        payload: d.characters.info.pages
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
            filters: {
                name: "",
                status: "",
                specie: "",
                gender: "",
                page: 1
            }
        }
    })

    // get all characters
    await getAllCharacters(dispatch)
}

export const setSelectedCharacter = async (dispatch, data) => {
    // fetch selected character
    const { data: d } = await client.query({
        query: querys.GET_DETAIL_CHARACTER,
        variables: data.variables
    })

    const selectedCharacter = d.charactersByIds[0];

    // set selected character
    dispatch({
        type: types.SET_SELECTED_CHARACTER_TYPE,
        payload: selectedCharacter
    })
}
