import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "../Header/Header";
import Store from "../Store/Store";

class Home extends Component {
  render() {
    return (
      <div className="homePage">
        <Header />
        <h1>Homepage</h1>
        <Route path={`${this.props.match.path}store`} component={Store} />
      </div>
    );
  }
}

export default Home;
