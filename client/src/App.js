import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';

import './App.css';
import AdminPanel from './components/AdminPanel/AdminPanel.jsx';

class App extends Component {
 

    state = {
      loggedIn: false
    }
  
  
signIn = () => {
  console.log('hello');
  this.setState({loggedIn: true});
}

  render() {
    return (
      <Router>
        <div>
          <Header />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" render={props => <LoginForm {...props} signIn={this.signIn} /> } />
            <Route path ="/admin" render={props => <AdminPanel {...props} auth={this.state.loggedIn} />} /> 
            <Route component={NotFound} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
