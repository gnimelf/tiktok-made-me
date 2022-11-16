import "bootstrap/dist/css/bootstrap.min.css";
import BodyContainer from "./BodyContainer";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
    uri: "/graphql",
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
