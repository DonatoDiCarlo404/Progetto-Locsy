const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  getNotifiche,
  getCountNonLette,
  markAsRead,
  markAllAsRead,
  deleteNotifica
} = require('../controllers/notificheController');

// Tutte le routes richiedono autenticazione
router.use(protect);

router.get('/', getNotifiche);
router.get('/count', getCountNonLette);
router.put('/:id/letta', markAsRead);
router.put('/leggi-tutte', markAllAsRead);
router.delete('/:id', deleteNotifica);

module.exports = router;
