import Header from "./components/Header";
import Characters from "./components/Characters";
import ModalStateProvider from "./context/modal/modalState.jsx"

export default function App() {
  return (
    <div className="container">
      <Header />
      <ModalStateProvider>
        <Characters />
      </ModalStateProvider>
    </div>
  )
}
