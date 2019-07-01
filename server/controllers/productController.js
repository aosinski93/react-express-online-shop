const config = require('../config.js');
const Product = require('../models/Product');
const slugify = require('slugify');
const manufacturerController = require('../controllers/manufacturerController');
const jsftp = require('jsftp');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

exports.product_addProduct = (req, res, next) => {
  // const ftp = new jsftp(config.ftpConfig);

  let {
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

  let product = {
    // imageName: slugify(name),
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


exports.product_uploadImage = (req, res) => {
  let file = req.file;
  console.log(path.dirname(file.originalname));
  

  
};


// fs.readFile(local, function(err, buffer) {
//   if (err) {
//     console.error(err);
//   } else {
//     ftp.put(buffer, remote, function(err) {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log(name + " - uploaded successfuly");
//       }
//     });

//     sharp(buffer)
//       .resize(320, 240)
//       .toBuffer()
//       .then(resized => {
//         new jsftp(config.ftpConfig).put(
//           resized,
//           `/adam-osinski.com/sites/phone-store/product_images/mini/mini-${name}.jpg`,
//           function(err) {
//             if (err) {
//               console.error(err);
//             } else {
//               console.log(`resized ${name} - uploaded successfuly`);
//             }
//           }
//         );
//       });
//   }
// });
