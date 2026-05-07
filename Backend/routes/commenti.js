const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const {
  getCommenti,
  createCommento,
  deleteCommento,
  toggleLike,
  replyCommento
} = require('../controllers/commentiController');

// Routes
router.get('/', getCommenti);
router.post('/', protect, createCommento);
router.delete('/:id', protect, deleteCommento);
router.post('/:id/like', protect, toggleLike);
router.post('/:id/reply', protect, replyCommento);

module.exports = router;
