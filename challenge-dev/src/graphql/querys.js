import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS_QUERY = gql`
query GetAllCharacters {
  characters {
    results {
      id
      name
      image
    }
  }
}
`;

export const GET_CHARACTER_BY_NAME_QUERY = gql`
query getCharacterByName($name: String!) {
  characters(filter: {name: $name}) {
    results {
      id
      name
      image
    }
  }
}
`;

export const FILTER_CHARACTERS_QUERY = gql`
query filterCharactes($status: String, $specie: String, $gender: String){
  characters(filter: {status: $status, species: $specie, gender: $gender}){
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