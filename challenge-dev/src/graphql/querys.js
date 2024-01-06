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

export const GET_CHARACTER_BY_NAME = gql`
query getCharacterByName($name: String!) {
  characters(filter: {name: $name}) {
    results {
      id
      name
      image
    }
  }
}
`