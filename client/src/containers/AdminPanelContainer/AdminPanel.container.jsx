import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {fetchPanelMenu} from "../../actions/panelActions";
import {toggleDrawer} from '../../actions/globalActions';
import {userLogin} from "../../actions/userActions";
import {notifyError} from '../../actions/notificationsActions';
import AdminPanel from "../../components/panelComponents/AdminPanel/AdminPanel";
import LoginFormContainer from "../LoginFormContainer/LoginForm.container";

class AdminPanelContainer extends Component {
  componentDidMount = () => {
    if (this.props.dbError !== true) {
      this.props.fetchPanelMenu();
    }
    setTimeout(() => {
      // this.props.toggleDrawer();
    }, 1000)
  };

  render() {
    return (
      <Fragment>
        {(Object.entries(this.props.user).length !== 0 &&
          this.props.user.isAdmin === true) ? (
          <AdminPanel
            match={this.props.match}
            menu={this.props.menu}
          />
        ) : (
          <LoginFormContainer />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.panel.menu,
  user: state.user.loggedUser,
  dbError: state.global.dbError,
});

export default connect(
  mapStateToProps,
  {
    fetchPanelMenu,
    userLogin,
    toggleDrawer,
    notifyError
  }
)(AdminPanelContainer);
