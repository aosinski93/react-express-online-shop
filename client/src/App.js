import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/frontComponents/Home/Home.jsx";
import NotFound from "./components/commonComponents/NotFound/NotFound.jsx";
import "./App.css";
import Store from "./components/frontComponents/Store/Store.jsx";
import Footer from "./components/commonComponents/Footer/Footer.jsx";
import AdminPanelContainer from "./containers/AdminPanelContainer/AdminPanel.container.jsx";
import Notification from "./components/commonComponents/Notification/Notification.jsx";
import HeaderContainer from "./containers/HeaderContainer/Header.container.jsx";
import LoginFormContainer from "./containers/LoginFormContainer/LoginForm.container.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <HeaderContainer />
          <div className="app">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={LoginFormContainer} />
              <Route path="/admin" component={AdminPanelContainer} />
              )} />
              <Route path="/store" component={Store} />
              <Route component={NotFound} />
            </Switch>
            <div className="notification-box">
              <Notification />
            </div>
          </div>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
