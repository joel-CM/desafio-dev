import client from "../graphql/config"
import { GET_SPECIES_QUERY, GET_PAGES_QUERY } from "../graphql/querys"

export const getAllSpecies = async () => {
    // use a set to skip duplicated species
    const species = new Set();

    // get num pages
    const { data } = await client.query({ query: GET_PAGES_QUERY })
    const numPages = data.characters.info.pages;

    const querys = []
    for (let i = 1; i <= numPages; i++) {
        const promise = client.query({
            query: GET_SPECIES_QUERY,
            variables: { page: i }
        })
        querys.push(promise)
    }

    const response = await Promise.all(querys)
    response.forEach((res) => {
        res.data.characters.results.forEach((e) => species.add(e.species))
    })

    // return array of species
    return Array.from(species)
}