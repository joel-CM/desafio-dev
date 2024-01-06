import Form from "react-bootstrap/Form"
import { useContext, useEffect, useState } from "react";
import CharacterContext from "../context/character/characterContext"
import { filterCharacters } from "../context/character/actions"
import { getAllSpecies } from "../utils/getAllSpecies"

export default function FilterBySpecie() {
    const [localState, setLocalState] = useState([])
    const { state, dispatch } = useContext(CharacterContext);

    const handleFilter = (e) => {
        const specie = e.target.value;
        if (specie !== "none") {
            const data = { variables: { ...state.filters, specie } }
            filterCharacters(dispatch, data)
        }
    }

    // load all species in localState
    useEffect(() => {
        (async () => {
            const species = await getAllSpecies();
            setLocalState(species);
        })();
    }, [])

    return (
        <Form.Select onChange={(e) => handleFilter(e)} aria-label="Default select example">
            <option value="none">Specie</option>
            {localState.map((specie) => (
                <option key={specie} value={specie}>{specie}</option>
            ))}
        </Form.Select>
    )
}