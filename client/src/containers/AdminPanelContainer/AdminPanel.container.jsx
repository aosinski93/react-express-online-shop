import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {fetchPanelMenu} from "../../actions/panelActions";
import {toggleDrawer, fetchManufacturers, fetchProducts} from '../../actions/globalActions';
import {userLogin} from "../../actions/userActions";
import {notifyError} from '../../actions/notificationsActions';
import AdminPanel from "../../components/panelComponents/AdminPanel/AdminPanel";
import LoginFormContainer from "../LoginFormContainer/LoginForm.container";

class AdminPanelContainer extends Component {
  componentDidMount = () => {
    if (this.props.dbError !== true) {
      this.props.fetchPanelMenu();
      // this.props.fetchUsers();
    }
    setTimeout(() => {
      // this.props.toggleDrawer();
    }, 1000)
  };

  render() {
    return (
      <Fragment>
        {true || (Object.entries(this.props.loggedUser).length !== 0 &&
          this.props.loggedUser.isAdmin === true) ? (
          <AdminPanel
            match={this.props.match}
            menu={this.props.menu}
            manufacturers={this.props.manufacturers}
          />
        ) : (
          <LoginFormContainer path={this.props.match.path} />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.panel.menu,
  manufacturers: state.global.manufacturers,
  loggedUser: state.user.loggedUser,
  dbError: state.global.dbError,
  dummyData: state.global.dummyData
});

export default connect(
  mapStateToProps,
  {
    fetchPanelMenu,
    fetchManufacturers,
    fetchProducts,
    userLogin,
    toggleDrawer,
    notifyError
  }
)(AdminPanelContainer);
