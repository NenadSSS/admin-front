import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useLocalStorage } from "@rehooks/local-storage";
import { GRAPHQL_API_ROOT, customHistory } from "./constants";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import { UsersContainer } from "./containers/UsersContainer";
import { Login } from "./components/login";

function App() {
  const client = new ApolloClient({
    uri: GRAPHQL_API_ROOT,
  });
  const [user] = useLocalStorage("userEmail");

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router history={customHistory}>
          <h4>Admin app</h4>
          <br />
          <Switch>
            <Route path="/" exact={true}>
              {user ? (
                <Redirect to="/home" />
              ) : (
                <Container>
                  <Row className="justify-content-md-center">
                    <Login />
                  </Row>
                </Container>
              )}
            </Route>
            <Route path="/home">
              {user ? (
                <UsersContainer />
              ) : (
                <Link to="/">You need to verify your email again</Link>
              )}
            </Route>
          </Switch>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
