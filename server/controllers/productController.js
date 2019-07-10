const config = require('../config.js');
const Product = require('../models/Product');
const slugify = require('slugify');
const manufacturerController = require('../controllers/manufacturerController');
const jsftp = require('jsftp');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const jimp = require('jimp');

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
  if (req.files === null) {
    return res.status(400).json({msg: 'No file uploaded'});
  }

  let image = req.files.image;
  let imageName = `${req.params.slug}${path.extname(image.name)}`;

  const imageDir = `${__dirname}/../../client/public/product_images/`;

  image.mv(`${imageDir}${imageName}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    jimp.read(`${imageDir}${imageName}`, (err, image) => {
      if (err) throw err;
      image
        .resize(256, 256)
        .write(`${imageDir}${req.params.slug}.png`);
    });

    fs.exists(`${imageDir}${imageName}`, (exists) => {
      if (exists) {
        fs.unlink(`${imageDir}${imageName}`, (err) => {
          if (err) {
            throw err;
          }
        });
      } else {
        console.log('File not found, so not deleting.');
      }
    });

    res.json({fileName: image.name, filePath: `/resources/${image.name}`});
  })
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
