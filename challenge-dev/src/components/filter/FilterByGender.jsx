import Form from "react-bootstrap/Form"
import { useContext } from "react";
import CharacterContext from "../../context/character/characterContext"
import { filterCharacters } from "../../context/character/actions"

export default function FilterByGender() {
    const { state, dispatch } = useContext(CharacterContext);

    const handleFilter = (e) => {
        const gender = e.target.value;
        if (gender !== "") {
            const data = { variables: { ...state.filters, gender, page: 1 } }
            filterCharacters(dispatch, data)
        }
    }

    return (
        <Form.Select value={state.filters.gender} onChange={(e) => handleFilter(e)} aria-label="Default select example">
            <option value="">Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
        </Form.Select>
    )
}