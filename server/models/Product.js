const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = Schema({
  image: String,
  slug: String,
  name: { type: String, required: true },
  description: String,
  manufacturer: { type: Schema.Types.ObjectId, ref: "Manufacturer" },
  category: { type: Schema.Types.ObjectId, ref: "Menu" },
  size: String,
  resolution: String,
  battery: Number,
  camera: Number,
  sim_qty: Number,
  price: Number,
  date_of_release: Date,
  ram: Number,
  cpu: Number,
  operating_system: String
});

const Product = (module.exports = mongoose.model("Product", productSchema));

module.exports.addProduct = (product, callback) => {
  Product.create(product, callback);
};
module.exports.getProducts = (callback, limit) => {
  Product.find({}, callback)
    .limit(limit)
    .populate(["manufacturer", "category"]);
};
module.exports.getProduct = (id, callback) => {
  Product.findOne({ _id: id }, callback);
};
module.exports.deleteProduct = (id, callback) => {
  Product.findByIdAndDelete(id, callback);
};
