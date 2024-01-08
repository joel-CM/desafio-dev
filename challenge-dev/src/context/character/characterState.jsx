import { useReducer } from "react";
import characterReducer from "./characterReducer";
import CharacterContext from "./characterContext";

function CharacterStateProvider({ children }) {
    const initialState = {
        characters: [],
        totalPages: 0,
        loadingCharacters: false,
        selectedCharacter: {},
        filters: {
            name: "",
            status: "",
            specie: "",
            gender: "",
            page: 1
        }
    }

    const [state, dispatch] = useReducer(characterReducer, initialState);

    return (
        <CharacterContext.Provider value={{ state, dispatch }}>
            {children}
        </CharacterContext.Provider>
    )
}

export default CharacterStateProvider;