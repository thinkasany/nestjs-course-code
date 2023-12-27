// const { ShopRegion } = require('../model/mysql');
const getRegion = async(req, res) => {
  try {
    return res.json({ message: 'OK'});
  } catch (error) {
    console.error('Error fetching region data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getRegion
};

