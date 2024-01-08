import { useContext } from "react";
import CharacterContext from "../../context/character/characterContext";
import ModalContext from "../../context/modal/modalContext"
import Card from "react-bootstrap/Card";
import { setSelectedCharacter } from "../../context/character/actions";
import { setShowDetailModal } from "../../context/modal/actions"

export default function Character({ character }) {
    const { dispatch: characterDispatch } = useContext(CharacterContext);
    const { dispatch: modalDispatch } = useContext(ModalContext)

    const handleSetSelectedCharacter = async () => {
        // set the selected character in context
        const data = { variables: { ids: [character.id] } };
        await setSelectedCharacter(characterDispatch, data);
        // set show property to true in modal context
        setShowDetailModal(modalDispatch);
    }

    return (
        <div className="col-12 col-sm-6 col-md-3">
            <Card onClick={handleSetSelectedCharacter}>
                <Card.Img variant="top" src={character.image} />
                <Card.Body>
                    <Card.Title className="text-center">{character.name}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}