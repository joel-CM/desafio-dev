import { useContext } from "react";
import CharacterContext from "../context/character/characterContext";
import Form from 'react-bootstrap/Form';
import { getCharacterByName } from "../context/character/actions";

export default function Searchbar() {
    const { state, dispatch } = useContext(CharacterContext);

    const handleInput = async (e) => {
        const search = e.target.value;
        const data = { variables: { name: search } }
        await getCharacterByName(dispatch, data);
    }

    return (
        <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Control value={state.searchByName} onChange={(e) => handleInput(e)} placeholder="Search..." />
        </Form>
    )
}
