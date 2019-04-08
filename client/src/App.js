import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/frontComponents/Home/Home.jsx";
import NotFound from "./components/commonComponents/NotFound/NotFound.jsx";
import LoginForm from "./components/panelComponents/LoginForm/LoginForm.jsx";

import "./App.css";
import AdminPanel from "./components/panelComponents/AdminPanel/AdminPanel.jsx";
import Store from "./components/frontComponents/Store/Store.jsx";

class App extends Component {
  state = {
    loggedIn: false
  };

  signIn = () => {
    console.log("hello");
    this.setState({ loggedIn: true });
  };

  render() {
    return (
      <Router>
        <div className="app flex col-direction">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/login"
              render={props => <LoginForm {...props} signIn={this.signIn} />}
            />
            <Route
              path="/admin"
              render={props => (
                <AdminPanel {...props} auth={this.state.loggedIn} />
              )}
            />
            <Route path="/store" component={Store} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
