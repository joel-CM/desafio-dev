import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const api = new HttpLink({ uri: import.meta.env.VITE_RICK_AND_MORTY_URL })

const client = new ApolloClient({
    connectToDevTools: true,
    link: api,
    cache: new InMemoryCache()
})


export default client;