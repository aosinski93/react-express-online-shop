import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/frontComponents/Home/Home.jsx";
import NotFound from "./components/commonComponents/NotFound/NotFound.jsx";
import LoginForm from "./components/panelComponents/LoginForm/LoginForm.jsx";

import "./App.css";
import Store from "./components/frontComponents/Store/Store.jsx";
import Footer from "./components/commonComponents/Footer/Footer.jsx";
import AdminPanelContainer from "./containers/AdminPanelContainer/AdminPanel.container.jsx";

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
        <Fragment>
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
                  <AdminPanelContainer {...props} auth={this.state.loggedIn} />
                )}
              />
              <Route path="/store" component={Store} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
