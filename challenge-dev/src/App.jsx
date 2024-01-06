import Header from "./components/Header";
import Characters from "./components/Characters";
import { useEffect } from "react";
import { getAllSpecies } from "./utils/getAllSpecies"

export default function App() {

  useEffect(() => {
    (async () => {
      const species = await getAllSpecies();
      console.log(species)
    })();
  }, [])

  return (
    <div className="container">
      <Header />
      <Characters />
    </div>
  )
}
