import Character from "./Character";
import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "../../graphql/querys"

export default function Characters() {
    const { data, loading, error } = useQuery(GET_ALL_CHARACTERS);

    if (error) return <p>{error}</p>
    if (loading) return <p>LOADING...</p>

    return (
        <div className="row">
            {data.characters.results.map((character) => (
                <Character character={character} />
            ))}
        </div>
    )
}