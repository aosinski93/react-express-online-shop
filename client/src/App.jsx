import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './components/commonComponents/NotFound/NotFound.jsx';
import './App.css';
import Store from './components/frontComponents/Store/Store.jsx';
import Footer from './components/commonComponents/Footer/Footer.jsx';
import AdminPanelContainer from './containers/AdminPanelContainer/AdminPanel.container.jsx';
import HeaderContainer from './containers/HeaderContainer/Header.container.jsx';
import LoginFormContainer from './containers/LoginFormContainer/LoginForm.container.jsx';
import RegisterFormContainer from './containers/RegisterFormContainer/RegisterForm.container';
import NotificationContainer from './containers/NotificationContainer/Notification.container.jsx';
import HomeContainer from "./containers/HomeContainer/Home.container";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route component={HeaderContainer} />
        <div className="app">
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/login" component={LoginFormContainer} />
            <Route path="/register" component={RegisterFormContainer} />
            <Route path="/admin" component={AdminPanelContainer} />
            <Route path="/store" component={Store} />
            <Route path='/product/:slug' render={() => (<div>product</div>)} />
            <Route component={NotFound} />
          </Switch>
          <NotificationContainer />
        </div>
        <Footer />
      </Fragment>
    </Router>
  );
}


export default App;
