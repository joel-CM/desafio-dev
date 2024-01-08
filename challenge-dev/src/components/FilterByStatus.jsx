import Form from "react-bootstrap/Form"
import { useContext } from "react";
import CharacterContext from "../context/character/characterContext"
import { filterCharacters } from "../context/character/actions"

export default function FilterByStatus() {
    const { state, dispatch } = useContext(CharacterContext);

    const handleFilter = (e) => {
        const status = e.target.value;
        if (status !== "") {
            const data = { variables: { ...state.filters, status, page: 1 } }
            filterCharacters(dispatch, data)
        }
    }

    return (
        <Form.Select value={state.filters.status} onChange={(e) => handleFilter(e)} aria-label="Default select example">
            <option value="">Status...</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">unknown</option>
        </Form.Select>
    )
}