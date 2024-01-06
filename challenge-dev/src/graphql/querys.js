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

export const FILTER_CHARACTERS_BY_STATUS_QUERY = gql`
query filterCharactersByStatus($status: String!){
  characters(filter: {status: $status}){
    results{
      id
      name
      image
    }
  }
}
`;