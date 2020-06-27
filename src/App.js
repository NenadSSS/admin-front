import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import "./App.css";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:8080/v1/graphql",
  });

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <main>Admin app</main>
      </ApolloProvider>
    </div>
  );
}

export default App;
