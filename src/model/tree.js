const pool = require('../config/db');

const getAllTrees = async () => {
  const result = await pool.query('SELECT * FROM trees');
  return result.rows;
};

module.exports = {
  getAllTrees,
};
