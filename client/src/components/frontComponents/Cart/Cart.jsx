import React from 'react';
import {Box, Card, Container, Grid, Typography} from "@material-ui/core";
import CartItemContainer from "../../../containers/CartItemContainer/CartItem.container";
import CartSummary from "../CartSummary/CartSummary";

const renderCartStep = (content, step) => {
  switch (step) {
    case 1:
      return (
        <Grid container>
          <Grid item xs={12}>
            {content.map(cartItem => <CartItemContainer key={cartItem._id} itemId={cartItem._id} />)}
          </Grid>
        </Grid>
      );
    case 2:
      return 'step 2';
    default: {
      return null
    }
  }
};

const Cart = (props) => {
  let {content} = props.cart;
  return (
    <Box mt={5}>
      <Container>
        {content.length > 0
          ? (
            <Card raised>
              {renderCartStep(content, props.step)}
              <CartSummary
                cartTotal={props.cartTotal}
                handleNextStep={props.handleNextStep}
                handlePrevStep={props.handlePrevStep}
              />
            </Card>
          )
          : <Typography align={"center"}>Cart is empty</Typography>}

      </Container>
    </Box>
  );
};

export default Cart;