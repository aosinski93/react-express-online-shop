import React from 'react';
import {Card, CardContent, Grid, Typography, Button} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import DeleteButton from "../../commonComponents/DeleteButton/DeleteButton";

const useStyles = makeStyles(theme => ({
  cartItemImage: {
    maxHeight: '100px'
  }
}));

const CartItem = (props) => {
  const classes = useStyles();
  const {item} = props;
  return (
    <Card>
      <CardContent>
        <Grid container alignItems={"center"}>
          <Grid item xs>
            <img src={`/product_images/${item.slug}.png`} alt={item.name}
                 className={`img-responsive ${classes.cartItemImage}`} />
          </Grid>
          <Grid item xs>
            <Typography align={"center"}>
              {item.name}
            </Typography>
          </Grid>
          <Grid item xs>
            <Grid container alignItems={"center"}>
              <Grid item xs>
                <Button
                  onClick={props.decreaseQuantity}
                  data-id={item._id}
                >
                  -
                </Button>
              </Grid>
              <Grid item xs>
                <Typography align={"center"}>
                  {item.qty}
                </Typography>
              </Grid>
              <Grid item xs>
                <Button
                  onClick={props.increaseQuantity}
                  data-id={item._id}
                >
                  +
                </Button>
              </Grid>
            </Grid>

          </Grid>
          <Grid item xs>
            <Typography align={"center"}>
              ${item.price}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography align={"center"}>
              ${item.subtotal}
            </Typography>
          </Grid>
          <Grid item xs>
            <DeleteButton
              type="submit"
              className="btn btn-danger"
              onClick={props.handleRemove}
              dataId={item._id}
              title={`Remove ${item.name} from cart`}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CartItem;