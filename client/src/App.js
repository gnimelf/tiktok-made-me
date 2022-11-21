import "bootstrap/dist/css/bootstrap.min.css";
import BodyContainer from "./BodyContainer";
import "./App.css";
import { setContext } from "@apollo/client/link/context";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from "@apollo/client";

// GraphQL API endpoint
const httpLink = createHttpLink({
    uri: "/graphql",
});

//Request middleware to attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
    //retrive authentication token from local storage if it exists
    const token = localStorage.getItem("id_token");
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        },
    };
});

const client = new ApolloClient({
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <BodyContainer />
        </ApolloProvider>
    );
}

export default App;
