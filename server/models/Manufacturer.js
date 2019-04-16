const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const manufacturerSchema = Schema({
  name: String,
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }]
});

const Manufacturer = (module.exports = mongoose.model(
  "Manufacturer",
  manufacturerSchema
));

module.exports.addManufacturer = (manufacturer, callback) => {
  Manufacturer.create(manufacturer, callback);
};
module.exports.getManufacturers = (callback, limit) => {
  Manufacturer.find({}, callback).limit(limit);
};
module.exports.getManufacturerById = (id, callback) => {
  Manufacturer.findOne({ _id: id }, callback);
};
module.exports.addProductToManufacturer = (id, new_manufacturer, callback) => {
  Manufacturer.findOneAndUpdate({ _id: id }, new_manufacturer, callback);
};
module.exports.getManufacturerProducts = (name, callback) => {
  Manufacturer.findOne({ name: name.toLowerCase() }, callback).populate(
    "products"
  );
};
module.exports.deleteManufacturer = (id, callback) => {
  Manufacturer.findByIdAndDelete(id, callback);
};
