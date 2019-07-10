import React, { Component } from "react";
import { connect } from "react-redux";
import DrawerWrapper from "../../components/panelComponents/DrawerWrapper/DrawerWrapper";
import { toggleDrawer } from "../../actions/globalActions";

class DrawerContainer extends Component {
  render() {
    return (
      <DrawerWrapper
        match={this.props.match}
        isVisible={this.props.drawerIsVisible}
        toggleDrawer={this.props.toggleDrawer}
      />
    );
  }
}

const mapStateToProps = state => ({
  drawerIsVisible: state.global.drawerIsVisible
});

export default connect(
  mapStateToProps,
  { toggleDrawer }
)(DrawerContainer);
