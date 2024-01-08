import Button from "react-bootstrap/Button";
import CharacterContext from "../context/character/characterContext"
import { useContext } from "react"
import { resetAllFilters } from "../context/character/actions"

export default function ResetFilters() {
    const { dispatch } = useContext(CharacterContext);

    const handleResetFilters = () => {
        resetAllFilters(dispatch);
    }

    return (
        <Button className="mt-3 mt-sm-none" onClick={handleResetFilters}>
            Reset Filters
        </Button>
    )
}
