const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false }
});

const User = (module.exports = mongoose.model('User', userSchema));

module.exports.addUser = (user, callback) => {
  User.create(user, callback);
};
module.exports.getUserById = (id, callback) => {
  User.findOne({ _id: id }, callback);
};
module.exports.getUsers = (callback, limit) => {
  User.find({}, callback).limit(limit);
};
module.exports.getUserByUsername = (username, callback) => {
  User.findOne({ username: username }, callback);
};
module.exports.updateUser = (id, update, options, callback) => {
  User.findOneAndUpdate({ _id: id }, update, options, callback);
};
