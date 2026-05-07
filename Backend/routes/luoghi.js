const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const {
  getLuoghi,
  getLuogo,
  createLuogo,
  updateLuogo,
  deleteLuogo
} = require('../controllers/luoghiController');

// Routes pubbliche
router.get('/', getLuoghi);
router.get('/:id', getLuogo);

// Routes protette (admin)
router.post('/', protect, authorize('admin'), createLuogo);
router.put('/:id', protect, authorize('admin'), updateLuogo);
router.delete('/:id', protect, authorize('admin'), deleteLuogo);

module.exports = router;
