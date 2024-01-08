import { useEffect, useContext } from "react";
import CharacterContext from "../../context/character/characterContext"
import Character from "./Character";
import { getAllCharacters } from "../../context/character/actions"
import Row from "react-bootstrap/Row"

export default function Characters() {
    const { state, dispatch } = useContext(CharacterContext);

    // get all characters
    useEffect(() => {
        (async () => {
            getAllCharacters(dispatch);
        })();
    }, [])

    if (state.loadingCharacters) {
        return <h4 className="my-5 text-center">LOADING...</h4>
    }
    if (state.loadingCharacters === false && state.characters.length === 0) {
        return <h4 className="my-6 text-center">NO RESULTS...</h4>
    }

    return (
        <Row>
            {
                state.characters.map((character) => (
                    <Character key={character.id} character={character} />
                ))
            }
        </Row>
    )
}