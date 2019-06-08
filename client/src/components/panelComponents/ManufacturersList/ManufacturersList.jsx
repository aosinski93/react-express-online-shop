import React from "react";
import { Link } from "react-router-dom";
import DeleteButton from "../../commonComponents/DeleteButton/DeleteButton";
import { List, ListItem, Grid, Typography, Container } from "@material-ui/core";

const ManufacturersList = props => {
  if (props.manufacturers.length !== 0) {
    return (
      <List>
        {props.manufacturers.map(item => {
          return (
            <ListItem
              button
              key={item._id}
              id={item._id}
              onClick={() => props.setProductsFilter(item.name)}
            >
              <Container>
                <Link
                  to={`products/${item.name}`}
                  title={`Show all ${item.name}'s products`}
                >
                  <Grid container>
                    <Grid item xs={3}>
                      <Typography>{item.name}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography>{item.products.length}</Typography>
                    </Grid>
                    <Grid item xs={3} />
                    <Grid item xs={3}>
                      <DeleteButton
                        type="submit"
                        className="btn btn-danger"
                        onClick={props.handleDelete}
                        dataId={item._id}
                        title={`Delete ${item.name}`}
                      />
                    </Grid>
                    <Grid item xs={3} />
                  </Grid>
                </Link>
              </Container>
            </ListItem>
          );
        })}
      </List>
    );
  } else {
    return (
      <div className="col-lg-6 col-md-6">
        <p>No manufacturers</p>
      </div>
    );
  }
};
export default ManufacturersList;
