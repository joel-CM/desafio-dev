import { useQuery } from "@apollo/client"
import { GET_ALL_CHARACTERS } from "../graphql/querys.js"
import Button from "react-bootstrap/Button"

export default function App() {
  const { data, loading, error } = useQuery(GET_ALL_CHARACTERS);

  if (error) return <p>{error}</p>
  if (loading) return <p>loading...</p>

  return (
    <div className="container">
      <h1 className="text-center my-3">Rick and Morty App</h1>

    </div>
  )
}
