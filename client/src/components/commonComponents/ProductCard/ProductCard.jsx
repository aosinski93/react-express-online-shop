import React, {Component} from 'react';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  List,
  Container,
  Input,
  InputLabel,
  CardActions,
} from '@material-ui/core';

import PropTypes from 'prop-types';

import SmartphoneIcon from "@material-ui/icons/Smartphone";
import ComputerIcon from "@material-ui/icons/Computer";
import DevicesIcon from "@material-ui/icons/Devices";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
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
      imageName: "",
      qty: 1
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
    let quantityToCart = this.state.qty;
    return (
      <Container>
        <Box mt={4}>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={5}>
                  <Grid container spacing={2} alignItems={"center"}>
                    <Grid item>
                      {category && category.name ? selectIcon(category.name.toLowerCase()) : selectIcon()}
                    </Grid>
                    <Grid item>
                      <Typography variant='h5'>
                        {name}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                {!this.props.isInAdmin && (
                  <Grid item xs={7}>
                    <CardActions>
                      <Grid container justify={"flex-end"} spacing={2}>
                        <Grid item>
                          <SubmitButton type={'button'} value={_id} title={`Add ${name} to cart`}
                                        content={<AddShoppingCartIcon />} className={'addToCartButton'}
                                        onClick={(e) => this.props.addDeviceToCart(e, _id, quantityToCart)} />
                        </Grid>
                        <Grid item>
                          <SubmitButton type={'submit'} value={_id} title={`Add ${name}  to favourites`}
                                        content={<FavoriteBorderIcon />} className={'addToFavouritesButton'} />
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Grid>
                )}
              </Grid>
              <Grid container alignItems='center' justify='center'>
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
                        className={'hiddenInput'}
                      />

                      <Grid container alignItems='center'>
                        <SubmitButton
                          type={'button'}
                          content={'Choose image to add'}
                          className={'customImgInput'}
                          onClick={() => document.getElementById('product-image').click()}
                        />
                        <SubmitButton content={"Add image"} type={'submit'} />
                      </Grid>
                    </form>
                  )}
                  <img className={'img-responsive h-centered'}
                       src={`/product_images/${slug}.png`}
                       alt={name} />
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={12}>
                  <List>
                    {price && (
                      <ProductSpecDetail detailName={'price'} value={`$ ${price}`}
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

ProductCard.propTypes = {
  manufacturer: PropTypes.object,
  category: PropTypes.object,
  description: PropTypes.string,
  name: PropTypes.string,
  slug: PropTypes.string,
  cpu: PropTypes.number,
  ram: PropTypes.number,
  battery: PropTypes.number,
  resolution: PropTypes.string,
  operating_system: PropTypes.string,
  date_of_release: PropTypes.instanceOf(Date),
  price: PropTypes.number,
  _id: PropTypes.string,
  addDeviceToCart: PropTypes.func,
  isInAdmin: PropTypes.bool,
  uploadImage: PropTypes.func
};

export default ProductCard;
