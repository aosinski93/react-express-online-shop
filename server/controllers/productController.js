const Product = require("../models/Product");
const slugify = require("slugify");
const manufacturerController = require("../controllers/manufacturerController");
const easyFtp = require("easy-ftp");

exports.product_addProduct = (req, res, next) => {
  const ftp = new easyFtp();
  ftp.connect({
    host: process.env.FTP_HOST,
    port: process.env.FTP_PORT,
    username: process.env.FTP_USERNAME,
    password: process.env.FTP_PASSWORD,
    type: process.env.FTP_TYPE
  });

  let {
    image,
    name,
    description,
    manufacturer,
    category,
    size,
    resolution,
    battery,
    camera,
    sim_qty,
    price,
    date_of_release,
    ram,
    cpu,
    operating_system
  } = req.body;

  console.log(req.body);
  
  

  let product = {
    image: slugify(image) || "",
    name,
    slug: slugify(name),
    description,
    manufacturer,
    category,
    size,
    resolution,
    battery,
    camera,
    sim_qty,
    price,
    date_of_release,
    ram,
    cpu,
    operating_system
  };  

  Product.addProduct(product, (err, product) => {
    if (err) {
      throw err;
    }
    manufacturerController.manufacturer_addProductToManufacturer(
      req,
      res,
      next,
      product
    );

    res.send(product);
  });
};

exports.product_getProduct = (req, res) => {
  let id = req.params.id;

  Product.getProduct(id, (err, product) => {
    if (err) {
      throw err;
    }

    res.send(product);
  });
};

exports.product_getProducts = (req, res) => {
  Product.getProducts((err, products) => {
    if (err) {
      throw err;
    }
    res.send(products);
  });
};

exports.product_deleteProduct = (req, res) => {
  let id = req.params.id;

  Product.deleteProduct(id, (err, product) => {
    if (err) {
      throw err;
    }
    res.send(product);
  });
};
