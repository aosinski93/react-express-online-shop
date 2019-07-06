import React from 'react';
import {Card, CardContent, Grid, Typography, Box, InputLabel, List, ListItem, Container} from '@material-ui/core';

import SmartphoneIcon from "@material-ui/icons/Smartphone";
import ComputerIcon from "@material-ui/icons/Computer";
import DevicesIcon from "@material-ui/icons/Devices";

const selectIcon = (category) => {
  switch (category) {
    case 'phones': {
      return <SmartphoneIcon />
    }
    case 'computers': {
      return <ComputerIcon />
    }
    default: {
      return <DevicesIcon />
    }
  }
};

const ProductCard = (props) => {
  let {manufacturer, category, description, name, cpu, ram, battery, resolution, operating_system, date_of_release, price} = props.data;
  return (
    <Container>
      <Box mt={4}>
        <Card>
          <CardContent>
            <Grid container alignItems='center'>
              <Box mr={4}>
                {category.name ? selectIcon(category.name.toLowerCase()) : selectIcon()}
              </Box>
              <Typography variant='h5'>
                {name}
              </Typography>
            </Grid>
            <Grid container alignItems='center'>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <img className={'img-responsive'}
                     src='https://api.sonymobile.com/files/xperia-L2-black-product-shot-2000x2000-f504208a1cce7028c02c783bf499c40b.png'
                     alt={name} />
              </Grid>
              <Grid item lg={4} md={4} sm={4} xs={12}>
                <List>
                  <ListItem button>
                    <Grid container alignItems='center'>
                      <Grid item lg={3} md={3} sm={3} xs={12}>
                        <InputLabel>
                          Price
                        </InputLabel>
                      </Grid>
                      <Grid item lg={6} md={6} sm={6} xs={12}>
                        <Typography>
                          {price} $
                        </Typography>
                      </Grid>
                    </Grid>
                  </ListItem>

                  {manufacturer && (
                    <ListItem button>
                      <Grid container alignItems='center'>
                        <Grid item lg={3} md={3} sm={3} xs={12}>
                          <InputLabel>
                            Manufaturer
                          </InputLabel>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                          <Typography>
                            {manufacturer.name}
                          </Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                  )}

                  {category && (
                    <ListItem button>
                      <Grid container alignItems='center'>
                        <Grid item lg={3} md={3} sm={3} xs={12}>
                          <InputLabel>
                            Category
                          </InputLabel>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                          <Typography>
                            {category.name}
                          </Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                  )}

                  {cpu !== 0 && (
                    <ListItem button>
                      <Grid container alignItems='center'>
                        <Grid item lg={3} md={3} sm={3} xs={12}>
                          <InputLabel>
                            CPU
                          </InputLabel>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                          <Typography>
                            {cpu} CPU('s)
                          </Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                  )}

                  {ram !== 0 && (
                    <ListItem button>
                      <Grid container alignItems='center'>
                        <Grid item lg={3} md={3} sm={3} xs={12}>
                          <InputLabel>
                            RAM
                          </InputLabel>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                          <Typography>
                            {ram} GB
                          </Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                  )}
                  {date_of_release !== '' && (
                    <ListItem button>
                      <Grid container alignItems='center'>
                        <Grid item lg={3} md={3} sm={3} xs={12}>
                          <InputLabel>
                            Date of release
                          </InputLabel>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                          <Typography>
                            {date_of_release}
                          </Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                  )}

                  {operating_system !== '' && (
                    <ListItem button>
                      <Grid container alignItems='center'>
                        <Grid item lg={3} md={3} sm={3} xs={12}>
                          <InputLabel>
                            Operating system
                          </InputLabel>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                          <Typography>
                            {operating_system}
                          </Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                  )}

                  {battery !== 0 && (
                    <ListItem button>
                      <Grid container alignItems='center'>
                        <Grid item lg={3} md={3} sm={3} xs={12}>
                          <InputLabel>
                            Battery capacity
                          </InputLabel>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                          <Typography>
                            {battery} mAh
                          </Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                  )}

                  {resolution !== '' && (
                    <ListItem button>
                      <Grid container alignItems='center'>
                        <Grid item lg={3} md={3} sm={3} xs={12}>
                          <InputLabel>
                            Screen resolution
                          </InputLabel>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                          <Typography>
                            {resolution} px
                          </Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                  )}
                </List>
              </Grid>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Typography>
                {description}
              </Typography>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default ProductCard;
