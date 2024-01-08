import { useContext } from "react";
import CharacterContext from "../../context/character/characterContext";
import Form from 'react-bootstrap/Form';
import { filterCharacters } from "../../context/character/actions";

export default function Searchbar() {
    const { state, dispatch } = useContext(CharacterContext);

    const handleInput = async (e) => {
        const name = e.target.value;
        const data = { variables: { ...state.filters, name, page: 1 } }
        await filterCharacters(dispatch, data);
    }
6
    return (
        <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Control value={state.filters.name} onChange={(e) => handleInput(e)} placeholder="Search..." />
        </Form>
    )
}
