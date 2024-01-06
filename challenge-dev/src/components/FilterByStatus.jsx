import Form from "react-bootstrap/Form"
import { useContext } from "react";
import CharacterContext from "../context/character/characterContext"
import { filterCharactersByStatus } from "../context/character/actions"
import { FILTER_CHARACTERS_BY_STATUS_TYPE } from "../context/types"

export default function FilterByStatus() {
    const { state, dispatch } = useContext(CharacterContext);

    const handleFilter = (e) => {
        const status = e.target.value;
        if (status !== "none") {
            const data = { variables: { status } }
            filterCharactersByStatus(dispatch, data)
        }
    }

    return (
        <Form.Select onChange={(e) => handleFilter(e)} aria-label="Default select example">
            <option value="none">Status</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">unknown</option>
        </Form.Select>
    )
}