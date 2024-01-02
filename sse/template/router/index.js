const region = require('../service/region');

module.exports = function (app) {
  app.get('/health',  (req, res) => {
    return res.json({ message: 'OK', data: `Time Is ${new Date().toString()}` });
  });

  app.get('/stream', region.getLogChange);
};
