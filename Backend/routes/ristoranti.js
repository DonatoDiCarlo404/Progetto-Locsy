const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const {
  getRistoranti,
  getRistorante,
  createRistorante,
  updateRistorante,
  deleteRistorante,
  getRecensioni
} = require('../controllers/ristorantiController');

// Route recensioni
router.get('/:id/recensioni', getRecensioni);

// Routes pubbliche
router.get('/', getRistoranti);
router.get('/:id', getRistorante);

// Routes protette (admin)
router.post('/', protect, authorize('admin'), createRistorante);
router.put('/:id', protect, authorize('admin'), updateRistorante);
router.delete('/:id', protect, authorize('admin'), deleteRistorante);

module.exports = router;
