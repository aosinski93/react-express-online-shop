const Manufacturer = require("../models/Manufacturer");
const Product = require("../controllers/productController");
const slugify = require("slugify");

exports.manufacturer_addManufacturer = (req, res) => {
  let { name, logoSrc, products } = req.body;

  let manufacturer = {
    name,
    slug: slugify(name),
    logoSrc: logoSrc,
    products: products || []
  };

  Manufacturer.addManufacturer(manufacturer, (err, manufacturer) => {
    if (err) {
      throw err;
    }
    res.send(manufacturer);
  });
};

exports.manufacturer_getManufacturers = (req, res) => {
  Manufacturer.getManufacturers((err, manufacturers) => {
    if (err) {
      throw err;
    }
    res.send(manufacturers);
  });
};

exports.manufacturer_addProductToManufacturer = (req, res, next, product) => {
  Manufacturer.getManufacturerById(
    product.manufacturer,
    (err, manufacturer) => {
      if (err) {
        throw err;
      }
      let new_manufacturer = {
        _id: manufacturer._id,
        products: manufacturer.products,
        name: manufacturer.name
      };

      let update = Object.assign({}, new_manufacturer);
      update.products.push(product._id);

      Manufacturer.addProductToManufacturer(
        manufacturer._id,
        new_manufacturer,
        (err, updatedManufacturer) => {
          if (err) {
            throw err;
          }
          console.log(`${product.name} bound to ${updatedManufacturer.name}`);
        }
      );
    }
  );
};

exports.manufacturer_getManfacturerProducts = (req, res) => {
  Manufacturer.getManufacturerProducts(
    req.params.manufacturerName,
    (err, products) => {
      if (err) {
        throw err;
      }
      res.send(products.products);
    }
  );
};

exports.manufacturer_deleteManufacturer = (req, res) => {
  Manufacturer.deleteManufacturer(req.params.id, (err, manufacturer) => {
    if (err) {
      throw err;
    }
    res.send(manufacturer);
  });
};
