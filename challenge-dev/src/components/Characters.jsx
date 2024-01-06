import { useEffect, useContext } from "react";
import CharacterContext from "../context/character/characterContext"
import Character from "./Character";
import { getAllCharacters } from "../context/character/actions"

export default function Characters() {
    const { state, dispatch } = useContext(CharacterContext);

    useEffect(() => {
        (async () => {
            getAllCharacters(dispatch);
        })();
    }, [])

    if (state.loadingCharacters) return <p>LOADING...</p>

    return (
        <div className="row">
            <h1>characters</h1>
            {
                state.characters.map((character) => (
                    <Character key={character.id} character={character} />
                ))
            }
        </div>
    )
}