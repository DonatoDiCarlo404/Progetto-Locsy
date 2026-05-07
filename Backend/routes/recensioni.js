const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const {
  createRecensione,
  updateRecensione,
  deleteRecensione,
  toggleLike
} = require('../controllers/recensioniController');

// Tutte le routes richiedono autenticazione
router.post('/', protect, createRecensione);
router.put('/:id', protect, updateRecensione);
router.delete('/:id', protect, deleteRecensione);
router.post('/:id/like', protect, toggleLike);

module.exports = router;
