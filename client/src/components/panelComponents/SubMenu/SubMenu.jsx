import React from "react";
import FormGroup from "../../commonComponents/FormGroup/FormGroup";
import DeleteButton from "../../commonComponents/DeleteButton/DeleteButton";
import SubmitButton from "../../commonComponents/SubmitButton/SubmitButton";
import SubcategoryItem from "../../commonComponents/SubcategoryItem/SubcategoryItem";
import { ListItem, Typography, Grid, List } from "@material-ui/core";
import PropTypes from 'prop-types';

const SubMenu = props => {
  return (
    <ListItem>
      <Grid container>
        <Grid container display='flex' alignItems='center'>
          <Grid item xs={2}>
            <Typography>{props.item.name}</Typography>
          </Grid>
          <Grid item xs={10}>
            <form id={props.item._id + "-form"} onSubmit={props.onSubmit}>
              <Grid container display='flex' alignItems='center'>
                <Grid item xs={7}>
                  <FormGroup
                    type="text"
                    name="subcategoryName"
                    labelText={`Add new subcategory to ${props.item.name} `}
                    value={props.subcategoryName}
                    onChange={props.onChange}
                    className="post-data-input form-control"
                  />
                </Grid>
                <Grid item>
                  <SubmitButton
                    className="data-submit post-data-button btn btn-success"
                    type="submit"
                    value="+"
                    title="Add next subcategory"
                    content={'+'}
                  />
                </Grid>
                <Grid item>
                  <DeleteButton
                    className="data-submit delete-data-button btn btn-danger"
                    onClick={props.onDeleteMenu}
                    dataId={props.item._id}
                    title={`Delete ${props.item._id}`}
                  />
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={8}>
            <List
              id={props.item._id + "-subcategories"}
              className="subcategories"
            >
              {props.item.subcategories &&
                props.item.subcategories.map(subcategoryItem => (
                  <SubcategoryItem
                    key={subcategoryItem._id}
                    subcategoryItem={subcategoryItem}
                    onDeleteSubcategory={props.onDeleteSubcategory}
                  />
                ))}
            </List>
          </Grid>
        </Grid>
      </Grid>
    </ListItem>
  );
};

SubMenu.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  onDeleteSubcategory: PropTypes.func,
  item: PropTypes.object,
  subcategories: PropTypes.array
};

export default SubMenu;
