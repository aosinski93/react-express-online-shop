import React from 'react';
import {Box, Card, Container, Grid, Typography} from "@material-ui/core";
import CartItemContainer from "../../../containers/CartItemContainer/CartItem.container";
import CartSummary from "../CartSummary/CartSummary";
import PropTypes from 'prop-types';

const Cart = (props) => {
  let {content} = props.cart;
  return (
    <Box mt={5}>
      <Container>
        {content.length > 0
          ? (
            <Card raised>
              <Grid container>
                <Grid item xs={12}>
                  {content.map(cartItem => <CartItemContainer key={cartItem._id} item={cartItem} />)}
                </Grid>
              </Grid>
              <CartSummary cartTotal={props.cartTotal} />
            </Card>
          )
          : <Typography align={"center"}>Cart is empty</Typography>}

      </Container>
    </Box>
  );
};

Cart.propTypes = {
  cart: PropTypes.object
};

export default Cart;