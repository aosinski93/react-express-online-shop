import React from "react";
import DeleteButton from "../DeleteButton/DeleteButton";
import { ListItem, Typography, Grid } from "@material-ui/core";

const SubcategoryItem = props => {
  return (
    <ListItem key={props.subcategoryItem._id} className={props.className}>
      <Grid container>
        <Grid item xs={10}>
          <Typography>{props.subcategoryItem.name}</Typography>
        </Grid>
        <Grid item xs={2}>
          <DeleteButton
            className="data-submit delete-data-button btn btn-danger"
            onClick={props.onDeleteSubcategory}
            dataId={props.subcategoryItem._id}
            dataParent={props.subcategoryItem.parentId}
            title={`Delete ${props.subcategoryItem.name}`}
          />
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default SubcategoryItem;
