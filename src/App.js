import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

import { UserContainer } from "./containers/UserContainer";
import { Login } from "./components/login";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:8080/v1/graphql",
  });
  const customHistory = createBrowserHistory();

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router history={customHistory}>
          <h4>Admin app</h4>
          <br />
          <Switch>
            <Route path="/">
              <Container>
                <Row className="justify-content-md-center">
                  <Login />
                </Row>
              </Container>
            </Route>
          </Switch>
          {/* <UserContainer /> */}
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
