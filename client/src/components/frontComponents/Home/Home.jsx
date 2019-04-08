import React, { Component } from "react";
import { Route } from "react-router-dom";
import Store from "../../frontComponents/Store/Store.jsx";
import Header from "../../commonComponents/Header/Header";

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
