import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import "./App.css";
import { UserContainer } from "./containers/UserContainer";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:8080/v1/graphql",
  });

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <main>Admin app</main>
        <UserContainer />
      </ApolloProvider>
    </div>
  );
}

export default App;
