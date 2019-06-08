import React, { Component } from "react";
import { connect } from "react-redux";
import { userLogout } from "../../actions/userActions";
import { toggleDrawer } from '../../actions/globalActions';
import Header from "../../components/commonComponents/Header/Header";

class HeaderContainer extends Component {
  render() {
    return (
      <Header
      match={this.props.match}
        user={
          Object.entries(this.props.loggedUser).length !== 0
            ? this.props.loggedUser
            : null
        }
        toggleDrawer={this.props.toggleDrawer}
        userLogout={this.props.userLogout}
      />
    );
  }
}

const mapStateToProps = state => ({
  loggedUser: state.user.loggedUser
});

export default connect(
  mapStateToProps,
  { userLogout, toggleDrawer }
)(HeaderContainer);
