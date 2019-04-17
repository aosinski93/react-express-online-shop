const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = Schema({
  name: String,
  slug: String,
  subcategories: [{ type: Schema.Types.ObjectId, ref: "Subcategory" }]
});

const Menu = (module.exports = mongoose.model("Menu", menuSchema));

module.exports.getMenu = (callback, limit) => {
  Menu.find({}, callback)
    .limit(limit)
    .populate("subcategories");
};
module.exports.getMenuItem = (id, callback) => {
  Menu.findOne({ _id: id }, callback);
};
module.exports.addMenuItem = (menuItem, callback) => {
  Menu.create(menuItem, callback);
};
module.exports.deleteMenuItem = (id, callback) => {
  Menu.findByIdAndDelete(id, callback);
};
module.exports.updateMenuItem = (id, update, options, callback) => {
  Menu.findOneAndUpdate({ _id: id }, update, options, callback);
};
