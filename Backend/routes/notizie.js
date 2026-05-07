const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const {
  getNotizie,
  getNotizia,
  createNotizia,
  updateNotizia,
  deleteNotizia,
  toggleLike
} = require('../controllers/notizieController');

// Routes pubbliche
router.get('/', getNotizie);
router.get('/:id', getNotizia);

// Routes protette (admin)
router.post('/', protect, authorize('admin'), createNotizia);
router.put('/:id', protect, authorize('admin'), updateNotizia);
router.delete('/:id', protect, authorize('admin'), deleteNotizia);

// Like (utente autenticato)
router.post('/:id/like', protect, toggleLike);

module.exports = router;
