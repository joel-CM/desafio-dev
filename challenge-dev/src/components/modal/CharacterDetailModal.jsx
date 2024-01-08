import { useContext } from "react";
import ModalContext from "../../context/modal/modalContext";
import CharacterContext from "../../context/character/characterContext"
import { setHideDetailModal } from "../../context/modal/actions";
import Modal from 'react-bootstrap/Modal';
import Image from "react-bootstrap/Image"

export default function CharacterDetailModal() {
    const { state: modalState, dispatch: modalDispatch } = useContext(ModalContext);
    const { state: characterState } = useContext(CharacterContext);

    return (
        <Modal
            show={modalState.show}
            onHide={() => setHideDetailModal(modalDispatch)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {characterState.selectedCharacter.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-auto">
                        <Image src={characterState.selectedCharacter.image} rounded />
                    </div>
                    <div className="col-12 col-sm-auto">
                        <p>status: {characterState.selectedCharacter.status}</p>
                        <p>gender: {characterState.selectedCharacter.gender}</p>
                        <p>species: {characterState.selectedCharacter.species}</p>
                        <p>type: {characterState.selectedCharacter.type}</p>
                        <p>location: {characterState.selectedCharacter.location?.name}</p>
                        <p>origin: {characterState.selectedCharacter.origin?.name}</p>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}