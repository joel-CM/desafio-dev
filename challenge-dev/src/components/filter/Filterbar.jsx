import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import FilterByStatus from "./FilterByStatus";
import FilterBySpecie from "./FilterBySpecie";
import FilterByGender from "./FilterByGender";
import ResetFilters from "./ResetFilters";

export default function Filterbar() {
    return (
        <Row className="mb-3">
            <Col className="d-flex justify-content-center align-item-center" xs={12} sm={3}>
                <FilterByStatus />
            </Col>
            <Col className="d-flex justify-content-center align-item-center" xs={12} sm={3}>
                <FilterBySpecie />
            </Col>
            <Col className="d-flex justify-content-center align-item-center" xs={12} sm={3}>
                <FilterByGender />
            </Col>
            <Col className="d-flex justify-content-center align-item-center" xs={12} sm={3}>
                <ResetFilters />
            </Col>
        </Row>
    )
}