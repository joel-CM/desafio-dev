import Card from "react-bootstrap/Card";

export default function Character({ character }) {
    return (
        <div className="col-12 col-sm-6 col-md-3">
            <Card>
                <Card.Img variant="top" src={character.image} />
                <Card.Body>
                    <Card.Title className="text-center">{character.name}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}