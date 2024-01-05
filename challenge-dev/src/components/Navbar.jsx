import Navbar from "react-bootstrap/Navbar";
import Searchbar from "./Searchbar";

export default () => {
    return (
        <Navbar className="bg-body-tertiary justify-content-center my-3">
            <Searchbar />
        </Navbar>
    )
}