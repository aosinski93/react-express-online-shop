import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './components/commonComponents/NotFound/NotFound.jsx';
import './App.css';
import Footer from './components/commonComponents/Footer/Footer.jsx';
import AdminPanelContainer from './containers/AdminPanelContainer/AdminPanel.container.jsx';
import HeaderContainer from './containers/HeaderContainer/Header.container.jsx';
import LoginFormContainer from './containers/LoginFormContainer/LoginForm.container.jsx';
import RegisterFormContainer from './containers/RegisterFormContainer/RegisterForm.container';
import NotificationContainer from './containers/NotificationContainer/Notification.container';
import HomeContainer from "./containers/HomeContainer/Home.container";
import StoreContainer from './containers/StoreContainer/Store.container';
import ProductCardContainer from './containers/ProductCardContainer/ProductCard.container';
import makeStyles from "@material-ui/core/styles/makeStyles";
import ContactPage from './components/frontComponents/ContactPage/ContactPage.jsx';
import CartContainer from "./containers/CartContainer/Cart.container";


const useStyles = makeStyles(theme => ({
  appBackground: {
    // background: 'radial-gradient(at top left, transparent, #777) #888',
    // backgroundAttachment: 'fixed'
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <Fragment>
        <Route component={HeaderContainer} />
        <div className={`app ${window.location.pathname.indexOf('admin') === -1 ? classes.appBackground : ''}`}>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/login" component={LoginFormContainer} />
            <Route path="/register" component={RegisterFormContainer} />
            <Route path="/admin" component={AdminPanelContainer} />
            <Route path="/store" component={StoreContainer} />
            <Route path='/product/:slug' component={ProductCardContainer} />
            <Route path='/contact' component={ContactPage} />
            <Route path='/cart' component={CartContainer} />
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
