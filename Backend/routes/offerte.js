const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const {
  getOfferte,
  getOfferta,
  createOfferta,
  updateOfferta,
  deleteOfferta
} = require('../controllers/offerteController');

// Routes pubbliche
router.get('/', getOfferte);
router.get('/:id', getOfferta);

// Routes protette (admin)
router.post('/', protect, authorize('admin'), createOfferta);
router.put('/:id', protect, authorize('admin'), updateOfferta);
router.delete('/:id', protect, authorize('admin'), deleteOfferta);

module.exports = router;
