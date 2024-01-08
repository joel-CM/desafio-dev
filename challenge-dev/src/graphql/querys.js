import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS_QUERY = gql`
query GetAllCharacters {
  characters {
    info {
      pages
    }
    results {
      id
      name
      image
    }
  }
}
`;

export const GET_DETAIL_CHARACTER = gql`
query getDetailCharacter($ids: [ID!]!) {
  charactersByIds(ids: $ids) {
    name
    image
    status
    gender
    species
    type
    location {
      name
    }
    origin {
      name
    }
  }
}`;

export const FILTER_CHARACTERS_QUERY = gql`
query filterCharactes($page: Int, $name: String, $status: String, $specie: String, $gender: String){
  characters(page: $page, filter: {name: $name, status: $status, species: $specie, gender: $gender}){
    info {
      pages
    }
    results{
      id
      name
      image
    }
  }
}`;

export const GET_SPECIES_QUERY = gql`
query getSpecies($page: Int) {
  characters(page: $page) {
    results {
      species
    }
  }
}`;

export const GET_PAGES_QUERY = gql`
query getPages{
  characters{
    info{
      pages,
    }
    results {
      id
    }
  }
}`;