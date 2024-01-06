import { useReducer } from "react";
import characterReducer from "./characterReducer";
import CharacterContext from "./characterContext";

function CharacterStateProvider({ children }) {
    const initialState = {
        characters: [],
        loadingCharacters: false,
        filters: {
            status: "",
            specie: "",
            gender: ""

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