import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/frontComponents/Home/Home.jsx';
import NotFound from './components/commonComponents/NotFound/NotFound.jsx';
import './App.css';
import Store from './components/frontComponents/Store/Store.jsx';
import Footer from './components/commonComponents/Footer/Footer.jsx';
import AdminPanelContainer from './containers/AdminPanelContainer/AdminPanel.container.jsx';
import HeaderContainer from './containers/HeaderContainer/Header.container.jsx';
import LoginFormContainer from './containers/LoginFormContainer/LoginForm.container.jsx';
import RegisterFormContainer from './containers/RegisterFormContainer/RegisterForm.container';
import NotificationContainer from './containers/NotificationContainer/Notification.container.jsx';

import { checkConnection } from '../src/actions/globalActions';

class App extends Component {

  componentDidMount = () => {
    this.props.checkConnection();
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Route component={HeaderContainer} />
          <div className="app">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={LoginFormContainer} />
              <Route path="/register" component={RegisterFormContainer} />
              <Route path="/admin" component={AdminPanelContainer} />
              )} />
              <Route path="/store" component={Store} />
              <Route component={NotFound} />
            </Switch>
            <NotificationContainer />
          </div>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}



export default connect(
  null, 
  { checkConnection }
)(App);
