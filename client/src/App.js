import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache()
  });

function App() {
    return (
        <ApolloProvider client={client}>
            <div>
                <Header />
                <Home />
            </div>
        </ApolloProvider>
    );
}

export default App;
