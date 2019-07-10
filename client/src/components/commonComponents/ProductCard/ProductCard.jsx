import React, {Component} from 'react';
import {Card, CardContent, Grid, Typography, Box, List, Container, Input, InputLabel} from '@material-ui/core';

import SmartphoneIcon from "@material-ui/icons/Smartphone";
import ComputerIcon from "@material-ui/icons/Computer";
import DevicesIcon from "@material-ui/icons/Devices";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import ProductSpecDetail from "../../frontComponents/ProductSpecDetail/ProductSpecDetail";
import SubmitButton from "../SubmitButton/SubmitButton";

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

class ProductCard extends Component {
  constructor() {
    super();

    this.state = {
      image: "",
      imageName: ""
    }
  }

  onChange = (e) => {
    this.setState({
      image: e.target.files[0],
      imageName: this.props.data.slug
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', this.state.image);

    try {
      this.props.uploadImage(formData, this.state.imageName);
    } catch (err) {
      console.log(err.message)
    }
  }

  render() {
    let {manufacturer, category, description, name, slug, cpu, ram, battery, resolution, operating_system, date_of_release, price, _id} = this.props.data;
    return (
      <Container>
        <Box mt={4}>
          <Card>
            <CardContent>
              <Grid container alignItems='center'>
                <Grid item lg={3}>
                  <Box mr={4}>
                    {category && category.name ? selectIcon(category.name.toLowerCase()) : selectIcon()}
                  </Box>
                  <Typography variant='h5'>
                    {name}
                  </Typography>
                </Grid>
                {!this.props.isInAdmin && (
                  <Grid item lg={9}>
                    <Grid container justify={"flex-end"}>
                      <Box mr={3}>
                        <SubmitButton type={'submit'} value={_id} title={`Add ${name} to cart`}
                                      content={<AddShoppingCartIcon />} className={'addToCartButton'} />
                      </Box>
                    </Grid>
                  </Grid>
                )}
              </Grid>
              <Grid container alignItems='center'>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  {this.props.isInAdmin && (
                    <form onSubmit={this.onSubmit}>
                      <InputLabel htmlFor={'product-image'}>
                        {this.state.imageName}
                      </InputLabel>
                      <Input
                        type={'file'}
                        id={'product-image'}
                        onChange={this.onChange}
                      />
                      <SubmitButton content={"Add image"} type={'submit'}/>
                    </form>
                  )}
                  <img className={'img-responsive'}
                       src={`/product_images/${slug}.png`}
                       alt={name} />
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={12}>
                  <List>
                    {price && (
                      <ProductSpecDetail detailName={'price'} value={price}
                      />
                    )}
                    {manufacturer && (
                      <ProductSpecDetail detailName={'manufacturer'} value={manufacturer.name} />
                    )}

                    {category && (
                      <ProductSpecDetail detailName={'category'} value={category.name} />
                    )}

                    {cpu !== 0 && (
                      <ProductSpecDetail detailName={'cpu quantity'} value={cpu} />
                    )}

                    {ram !== 0 && (
                      <ProductSpecDetail detailName={'ram memory'} value={`${ram} GB's`} />
                    )}
                    {date_of_release !== '' && (
                      <ProductSpecDetail detailName={'date of release'} value={date_of_release} />
                    )}

                    {operating_system !== '' && (
                      <ProductSpecDetail detailName={'operating system'} value={operating_system} />
                    )}

                    {battery !== 0 && (
                      <ProductSpecDetail detailName={'battery capacity'} value={`${battery} mAh`} />
                    )}

                    {resolution !== '' && (
                      <ProductSpecDetail detailName={'screen resolution'} value={`${resolution} [px]`} />
                    )}
                  </List>
                </Grid>
                <Grid></Grid>
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
  }
};

export default ProductCard;
