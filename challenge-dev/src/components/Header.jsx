import Navbar from "./navbar/Navbar";
import Filterbar from "./filter/Filterbar";

export default function Header() {
    return (
        <header>
            <h1 className="text-center my-3">Rick and Morty App</h1>
            <Navbar />
            <Filterbar />
        </header>
    )
}