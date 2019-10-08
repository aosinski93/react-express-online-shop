import React from "react";
import {Box, Container, Grid, Typography} from "@material-ui/core";
import DeviceListItem from "../DeviceListItem/DeviceListItem";
import SortOption from "../SortOption/SortOption";
import PropTypes from 'prop-types';
import ProductFilters from "../ProductFilters/ProductsFilter";

const Store = (props) => {
  const {products, match, sortBy, price, name, filters, activeFilters, setFilter, price_min, price_max, onChange} = props;
  return (
    <Box pt={5}>
      <Container>
        <Grid container spacing={5}>
          <Grid item lg={4} md={4} sm={4}>
            <Box p={2}>
              <ProductFilters
                setFilter={setFilter}
                products={products}
                filters={filters}
                activeFilters={activeFilters}
                price_min={price_min}
                price_max={price_max}
                onChange={onChange}
              />
            </Box>
          </Grid>
          <Grid item lg={8} md={8} sm={8}>
            {products.length > 0
              ? <>
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
                {products.map(device =>
                  <DeviceListItem key={device._id} match={match} device={device} maxHeight={100} />)}
              </>
              :
              <Box m={5}>
                <Container>
                  <Typography align={"center"}>
                    There is no products matching current filters
                  </Typography>
                </Container>
              </Box>
            }
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
};

Store.propTypes = {
  products: PropTypes.array,
  match: PropTypes.object,
  sortBy: PropTypes.func,
  price: PropTypes.string,
  name: PropTypes.string,
  filters: PropTypes.object,
  activeFilters: PropTypes.array,
  manufacturers: PropTypes.array,
  setFilter: PropTypes.func
};

export default Store;
