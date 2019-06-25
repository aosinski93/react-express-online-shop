const Stats = require('../models/Stats');

exports.setViewsCount = async (req, res) => {
  let page = req.path === '/' ? 'main' : 'other';
  let query = {
    name: page
  };
  let options = { upsert: true, new: true, setDefaultsOnInsert: true };
  let update = { $inc: { 'data.pageVisits': 1 } };

  Stats.setPageVisits(query, update, options, (err, page) => {
    if (err) {
      throw err;
    }
    res.json({'pageVisits': page.data.pageVisits });
  });
};
