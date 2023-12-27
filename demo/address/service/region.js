const { ShopRegion } = require('../model/mysql');
const getRegion = async(req, res) => {
  const parent_id = Number(req.query.parentId);
  try {
    const regions = await ShopRegion.findAll({ where: {parent_id} });
    return res.json({ message: 'OK', data: regions });
  } catch (error) {
    console.error('Error fetching region data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getRegion
};

