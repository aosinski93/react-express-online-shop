import React from "react";
import {Box, Container, Grid, Typography} from "@material-ui/core";
import DeviceListItem from "../DeviceListItem/DeviceListItem";

const Store = (props) => {
  const {products, match} = props;
  return props.products.length > 0
  ? <Box pt={5}>
      <Container>
        <Grid container>
          <Grid item lg={3} md={3} sm={3}>
            Filters here
          </Grid>
          <Grid item lg={9} md={9} sm={9}>
            
            {products.map(device => <DeviceListItem key={device._id} match={match} device={device} maxHeight={100}/>)}
          </Grid>
        </Grid>
      </Container>
    </Box>
    : <Box m={5}>
      <Container>
        <Typography align={"center"}>No products in database</Typography>
      </Container>
    </Box>
};

export default Store;
