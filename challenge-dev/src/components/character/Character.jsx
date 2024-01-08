import { useContext } from "react";
import CharacterContext from "../../context/character/characterContext";
import ModalContext from "../../context/modal/modalContext"
import Card from "react-bootstrap/Card";
import { setSelectedCharacter } from "../../context/character/actions";
import { setShowDetailModal } from "../../context/modal/actions"
import style from "./Character.module.css"

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
            <Card className={`${style.card} mb-3`} onClick={handleSetSelectedCharacter}>
                <Card.Img variant="" src={character.image} />
                <Card.Body className={style.cardBody}>
                    <Card.Title className="text-center text-white">{character.name}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}