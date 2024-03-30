import { Outlet } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  //The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <Header />
        <main className="mx-3">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
