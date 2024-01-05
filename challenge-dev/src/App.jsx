import './App.css'
import { useQuery, gql } from "@apollo/client"

const GET_ALL_CHARACTERS = gql`
query GetAllCharacters {
  characters {
    results {
      id
      name
      status
      gender
    }
  }
}
`;

export default function App() {
  const { data, loading, error } = useQuery(GET_ALL_CHARACTERS);

  if (error) return <p>{error}</p>
  if (loading) return <p>loading...</p>

  return (
    <div>
      <h1>Rick and Morty Graphql</h1>
      <div>
        {
          data.characters.results.map((character) => (
            <div key={character.id} style={{ border: "1px solid #000", margin: "3px" }}>
              <h5>{character.name}</h5>
              <p>{character.status}</p>
              <p>{character.gender}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
