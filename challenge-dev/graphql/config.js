import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const api = new HttpLink({ uri: "https://rickandmortyapi.com/graphql" })

const client = new ApolloClient({
    connectToDevTools: true,
    link: api,
    cache: new InMemoryCache()
})


export default client;