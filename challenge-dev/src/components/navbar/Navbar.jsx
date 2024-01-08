import NB from "react-bootstrap/Navbar";
import Searchbar from "./Searchbar";

export default function Navbar() {
    return (
        <NB className="bg-body-tertiary justify-content-center my-3">
            <Searchbar />
        </NB>
    )
}