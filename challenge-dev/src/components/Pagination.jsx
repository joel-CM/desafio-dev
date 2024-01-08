import { useContext } from "react"
import CharacterContext from "../context/character/characterContext"
import { PaginationControl } from "react-bootstrap-pagination-control"
import { filterCharacters } from "../context/character/actions"

export default function Pagination() {
    const { state, dispatch } = useContext(CharacterContext);

    const handleFilter = (page) => {
        // page: selected page
        const data = { variables: { ...state.filters, page } }
        filterCharacters(dispatch, data)
    }

    return (
        <div className="mt-3">
            <PaginationControl
                page={state.filters.page}
                between={3}
                total={state.totalPages}
                limit={1}
                changePage={handleFilter}
                ellipsis={1}
            />
        </div>
    )
}
