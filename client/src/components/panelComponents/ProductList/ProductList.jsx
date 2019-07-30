import React from "react";
import Loader from "../../commonComponents/Loader/Loader";
import PanelProductListItem from "../PanelProductListItem/PanelProductListItem";
import {Box, Container, Grid, List, Typography} from "@material-ui/core";

const ProductList = props => {
  const buildList = () => {
    if (props.products.length !== 0) {
      return (
        <List className="products-list list-group">
          {props.products.map(item => {
            return (
              <PanelProductListItem
                key={item._id}
                item={item}
                onDelete={props.onDelete}
              />
            );
          })}
        </List>
      );
    } else {
      return (
        <Box m={5}>
          <Container>
            <Typography align={"center"}>No products in database</Typography>
          </Container>
        </Box>
      );
    }
  };
  return (
    <Container>
      {props.products.length > 0 && (
        <Grid container>
          <Grid item xs={10}>
            <Grid container>
              <Grid item xs={3}>
                <Typography align="center">Image</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography align="center">Name</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography align="center">Manufacturer</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography align="center">OS</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2} />
        </Grid>
      )}
      <Grid container>
        <Grid item xs={12}>
          {buildList()}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductList;
