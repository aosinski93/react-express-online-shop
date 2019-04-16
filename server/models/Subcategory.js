const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subcategorySchema = Schema({
  parentId: [{ type: Schema.Types.ObjectId, ref: "Menu" }],
  name: String,
  slug: String
});

const Subcategory = (module.exports = mongoose.model(
  "Subcategory",
  subcategorySchema
));

module.exports.addSubcategory = (subcategory, callback) => {
  Subcategory.create(subcategory, callback);
};
