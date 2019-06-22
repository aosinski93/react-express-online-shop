import React, { Component } from "react";
import { Route } from "react-router-dom";
import Store from "../../frontComponents/Store/Store.jsx";
import { Container } from "@material-ui/core";

class Home extends Component {
  render() {
    return (
      <Container>
        <h1>Homepage</h1>
        <Route path={`${this.props.match.path}store`} component={Store} />
      </Container>
    );
  }
}

export default Home;
