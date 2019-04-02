const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = Schema({
  name: String,
  slug: String,
  subcategories: Array
});

const Menu = (module.exports = mongoose.model("Menu", menuSchema));

module.exports.getMenu = (callback, limit) => {
  Menu.find({}, callback).limit(limit);
};
module.exports.getMenuItem = (id, callback) => {
  Menu.findOne({ _id: id }, callback);
};
module.exports.addMenuItem = (menuItem, callback) => {
  Menu.create(menuItem, callback);
};
module.exports.deleteMenuItem = (id, callback) => {
  Menu.findOneAndDelete(id, callback);
};
module.exports.updateMenuItem = (id, new_menuItem, callback) => {
  Menu.findOneAndUpdate(id, new_menuItem, callback);
};
