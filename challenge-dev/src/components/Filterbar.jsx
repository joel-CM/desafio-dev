import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import FilterByStatus from "./FilterByStatus";

export default function Filterbar() {
    return (
        <Row>
            <Col xs={12} sm={4}>
                <FilterByStatus />
            </Col>
            <Col xs={12} sm={4}>
                <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </Col>
            <Col xs={12} sm={4}>
                <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </Col>
        </Row>
    )
}