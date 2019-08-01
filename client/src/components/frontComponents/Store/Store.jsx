import React from "react";
import {Box, Container, Grid, Typography} from "@material-ui/core";
import DeviceListItem from "../DeviceListItem/DeviceListItem";
import SortOption from "../SortOption/SortOption";

const Store = (props) => {
  const {products, match, sortBy, price, name} = props;
  return props.products.length > 0
    ? <Box pt={5}>
      <Container>
        <Grid container>
          <Grid item lg={3} md={3} sm={3}>
            Filters here
          </Grid>
          <Grid item lg={9} md={9} sm={9}>
            <Box p={2}>
              <Grid container alignItems={"center"}>
                <Grid item lg={4}>
                  <Typography>
                    Sort devices by:
                  </Typography>
                </Grid>
                <Grid item lg={8}>
                  <Grid container>
                    <Grid item lg={4}>
                      <SortOption
                        sortBy={sortBy}
                        fieldName={'Name'}
                        price={price}
                        name={name}
                      />
                    </Grid>
                    <Grid item lg={4}>
                      <SortOption
                        sortBy={sortBy}
                        fieldName={'Price'}
                        price={price}
                        name={name}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            {products.map(device => <DeviceListItem key={device._id} match={match} device={device} maxHeight={100} />)}
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
