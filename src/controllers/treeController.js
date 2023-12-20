const { getAllTrees } = require('../models/tree');

const getTrees = async (req, res) => {
  try {
    const trees = await getAllTrees();
    res.json(trees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getTrees,
};
