import React from "react";
import FormGroup from "../../commonComponents/FormGroup/FormGroup";
import SubmitButton from "../../commonComponents/SubmitButton/SubmitButton";
import SubMenuContainer from "../../../containers/SubMenuContainer/SubMenu.container.jsx";
import { Container, List, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  menuItems: {}
}));

const MenuItems = props => {
  const classes = useStyles();

  return (
    <Container className={classes.menuItems}>
      <form id="new-menu-form" onSubmit={props.onSubmit}>
        <Grid container display="flex" alignItems="center">
          <Grid item xs={4}>
            <FormGroup
              type="text"
              name="menuItemName"
              value={props.menuItemName}
              onChange={props.onChange}
              placeholder="Add new category"
              labelText="Add new menu item"
            />
          </Grid>
          <Grid item xs={3}>
            <SubmitButton
              type="submit"
              value="+"
              title="Add top-level category"
            />
          </Grid>
        </Grid>
      </form>
      <List>
        {props.menu &&
          props.menu.map(item => {
            return <SubMenuContainer key={item._id} item={item} />;
          })}
      </List>
    </Container>
  );
};

export default MenuItems;
