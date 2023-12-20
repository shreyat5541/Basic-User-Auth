const express = require('express');
const { getTrees } = require('../controllers/treeController');
const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/trees', authenticateToken, getTrees);

module.exports = router;
