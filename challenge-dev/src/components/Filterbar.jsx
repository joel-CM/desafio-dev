import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import FilterByStatus from "./FilterByStatus";
import FilterBySpecie from "./FilterBySpecie";
import FilterByGender from "./FilterByGender";

export default function Filterbar() {
    return (
        <Row>
            <Col xs={12} sm={4}>
                <FilterByStatus />
            </Col>
            <Col xs={12} sm={4}>
                <FilterBySpecie />
            </Col>
            <Col xs={12} sm={4}>
                <FilterByGender />
            </Col>
        </Row>
    )
}