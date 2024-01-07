import { useReducer } from "react"
import ModalContext from "./modalContext"
import modalReducer from "./modalReducer"

export default function ModalStateProvider({ children }) {
    const initialState = {
        show: false
    }

    const [state, dispatch] = useReducer(modalReducer, initialState);

    return (
        <ModalContext.Provider value={{ state, dispatch }}>
            {children}
        </ModalContext.Provider>
    )
}