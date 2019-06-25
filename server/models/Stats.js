const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statsSchema = Schema({
  name: String,
  data: {
    pageVisits: { type: Number, default: 0 }
  }
});

const Stats = (module.exports = mongoose.model('Stats', statsSchema));

module.exports.setPageVisits = (query, update, options, callback) => {
  Stats.findOneAndUpdate(query, update, options, callback);
};
