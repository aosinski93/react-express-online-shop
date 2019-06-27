import React, { Fragment } from 'react';
import { Card, CardContent, Grid, Typography, Box, InputLabel, List, ListItem } from '@material-ui/core';

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
}

const ProductCard = (props) => {
  console.log(props);
  let { manufacturer, category, description, name, cpu, ram, battery, resolution, operating_system, date_of_release } = props.data;
  return (
    <Fragment>
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
              <img src='../../../../../resources/product_images/galaxy-s5.png' alt={name} />
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <Typography>
                {description}
              </Typography>
            </Grid>
          </Grid>

          {props.isInAdmin ? (
            <>
              <List>
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
              </List>
            </>
          ) :
            (
              'shop'
            )
          }

        </CardContent>
      </Card>
    </Fragment>
  );
};

export default ProductCard;
