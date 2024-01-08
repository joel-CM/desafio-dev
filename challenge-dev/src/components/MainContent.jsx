import ModalStateProvider from "../context/modal/modalState.jsx";
import CharacterDetailModal from "./modal/CharacterDetailModal"
import Characters from "./character/Characters";
import Pagination from "./Pagination.jsx";

export default function MainContent() {
    return (
        <>
            <ModalStateProvider>
                <Characters />
                <CharacterDetailModal />
            </ModalStateProvider>
            <Pagination />
        </>
    )
}