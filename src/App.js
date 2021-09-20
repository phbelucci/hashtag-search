import React from "react";
import { Router, Route, Switch } from "react-router-dom";


import Loading from "./components/loading/Loading";
import NavBarCarbon from "./components/navbarCarbon/NavBarCarbon";
import Home from "./views/home/Home";
import Profile from "./views/Profile";
import ExternalApi from "./views/ExternalApi";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";

// styles
import "./App.css";



// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
import styled from "styled-components";

initFontAwesome();

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <Container>
        <NavBarCarbon />
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/external-api" component={ExternalApi} />
          </Switch>
        </Container>
      </Container>
    </Router>
  );
};

export default App;
