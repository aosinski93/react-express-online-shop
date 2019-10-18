import React from 'react';
import {Box, Card, Container, Grid, Typography} from "@material-ui/core";
import CartItemContainer from "../../../containers/CartItemContainer/CartItem.container";
import CartSummary from "../CartSummary/CartSummary";
import PropTypes from 'prop-types';
import CartDelivery from "../CartDelivery/CartDelivery";

const renderCartStep = (content, step, user, deliveryType, setDelivery, onChange, deliveryData) => {
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
      return (
        <Grid container>
          <Grid item xs={12}>
            <CartDelivery onChange={onChange} setDelivery={setDelivery} value={deliveryType} user={user} deliveryData={deliveryData}/>
          </Grid>
        </Grid>
      );
    default: {
      return null
    }
  }
};

const Cart = (props) => {
  let {content} = props.cart;
  let { step, user, deliveryType, setDelivery, onChange, name, lastName, address, city, postalCode, message } = props;
  let deliveryData = {
    name, lastName, address, city, postalCode, message
  };
  return (
    <Box mt={5}>
      <Container>
        {content.length > 0
          ? (
            <Card raised>
              {renderCartStep(content, step, user, deliveryType.name, setDelivery, onChange, deliveryData)}
              <CartSummary
                setDelivery={props.setDelivery}
                deliveryCost={props.deliveryType.cost}
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

Cart.propTypes = {
  cart: PropTypes.object
};

export default Cart;