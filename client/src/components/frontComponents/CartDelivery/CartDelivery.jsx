import React from 'react';
import {Container, Grid} from "@material-ui/core";
import FormGroup from "../../commonComponents/FormGroup/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Box from "@material-ui/core/Box";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const CartDelivery = (props) => {
  return (
    <Container maxWidth={"md"}>
      <Box py={4}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <FormGroup
              name='name'
              type='text'
              labelText='Name'
              value={props.user.username !== '' ? props.user.username : ''}
              onChange={props.onChange}
              placeholder='your name'
            />
            <FormGroup
              name='lastName'
              type='text'
              labelText='Last name'
              value={props.deliveryData.lastName !== '' ? props.deliveryData.lastName : ''}
              onChange={props.onChange}
              placeholder='your last name'
            />

            <FormGroup
              name='address'
              type='text'
              labelText='Address'
              value={props.deliveryData.address !== '' ? props.deliveryData.address : ''}
              onChange={props.onChange}
              placeholder='address'
            />

            <FormGroup
              name='city'
              type='text'
              labelText='City'
              value={props.deliveryData.city !== '' ? props.deliveryData.city : ''}
              onChange={props.onChange}
              placeholder='city'
            />

            <FormGroup
              name='postalCode'
              type='text'
              labelText='Postal code'
              value={props.deliveryData.postalCode !== '' ? props.deliveryData.postalCode.username : ''}
              onChange={props.onChange}
              placeholder='postal code'
            />
            <FormGroup
              name='additionalInfo'
              type='description'
              labelText='Message'
              value={props.deliveryData.message !== '' ? props.deliveryData.message : ''}
              onChange={props.onChange}
              placeholder='postal code'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box m={5}>
              <FormLabel component="legend">Choose delivery</FormLabel>

              <RadioGroup aria-label="delivery" name="delivery" value={props.deliveryType} onChange={props.setDelivery}>
                <FormControlLabel
                  value="0"
                  control={<Radio color={"primary"} />}
                  label="Self Pickup - $0"
                />
                <FormControlLabel
                  value="7,99"
                  control={<Radio color={"primary"} />}
                  label="DPD - $7,99"
                />
                <FormControlLabel
                  value="9,99"
                  control={<Radio color={"primary"} />}
                  label="UPS - $9,99"
                />
              </RadioGroup>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CartDelivery;