import React, { Component } from "react";
import { connect } from "react-redux";
import { userLogout } from "../../actions/userActions";
import Header from "../../components/commonComponents/Header/Header";

class HeaderContainer extends Component {
  render() {
    return (
      <Header
        user={
          Object.entries(this.props.loggedUser).length !== 0
            ? this.props.loggedUser
            : null
        }

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
  { userLogout }
)(HeaderContainer);
