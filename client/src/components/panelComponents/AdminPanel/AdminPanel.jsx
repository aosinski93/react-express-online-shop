import React from "react";
import { Route } from "react-router-dom";
import "../../../css_utilities/common.css";
import PanelProduct from "../PanelProduct/PanelProduct";
import ManufacturersContainer from "../../../containers/ManufacturersContainer/Manufacturers.container";
import MenuItemsContainer from "../../../containers/MenuItemsContainer/MenuItems.container";
import PanelProductsContainer from "../../../containers/PanelProductsContainer/PanelProducts.container";
import { Container, Box } from "@material-ui/core";
import DrawerContainer from '../../../containers/DrawerContainer/Drawer.container';
import UsersListContainer from "../../../containers/UsersListContainer/UsersList.container";

const AdminPanel = props => {
  return (
    <Box pt={2}>
      <main className="panelContent">
        <DrawerContainer match={props.match}/>
        <Container>
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
            path={`${props.match.path}/product/:id`}
            component={PanelProduct}
          />
        </Container>
      </main>
    </Box>
  );
};

export default AdminPanel;
