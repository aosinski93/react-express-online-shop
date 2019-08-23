import React from "react";
import { Route } from "react-router-dom";
import "../../../css_utilities/common.css";
import ManufacturersContainer from "../../../containers/ManufacturersContainer/Manufacturers.container";
import MenuItemsContainer from "../../../containers/MenuItemsContainer/MenuItems.container";
import PanelProductsContainer from "../../../containers/PanelProductsContainer/PanelProducts.container";
import { Container, Box } from "@material-ui/core";
import DrawerContainer from '../../../containers/DrawerContainer/Drawer.container';
import UsersListContainer from "../../../containers/UsersListContainer/UsersList.container";
import AdminPanelIndexContainer from "../../../containers/AdminPanelIndexContainer/AdminPanelIndex.container";
import ProductCardContainer from "../../../containers/ProductCardContainer/ProductCard.container";
import PropTypes from 'prop-types';

const AdminPanel = props => {
  return (
    <Box pt={2}>
      <main className="panelContent">
        <DrawerContainer match={props.match}/>
        <Container>
          <Route exact path='/admin' component={AdminPanelIndexContainer} />
          <Route
            path={`${props.match.path}/products`}
            component={PanelProductsContainer}
          />
          <Route
            path={`${props.match.path}/menu`}
            component={MenuItemsContainer}
          />
          <Route
            path={`${props.match.path}/manufacturers`}
            component={ManufacturersContainer}
          />
          <Route
            path={`${props.match.path}/users`}
            component={UsersListContainer}
          />
          <Route
            path={`${props.match.path}/product/:slug`}
            component={ProductCardContainer}
          />
        </Container>
      </main>
    </Box>
  );
};

AdminPanel.propTypes = {
  match: PropTypes.object
};

export default AdminPanel;
