const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const {
  getEventi,
  getEvento,
  createEvento,
  updateEvento,
  deleteEvento,
  togglePartecipazione,
  getCalendario
} = require('../controllers/eventiController');

// Route calendario
router.get('/calendario', getCalendario);

// Routes pubbliche
router.get('/', getEventi);
router.get('/:id', getEvento);

// Routes protette (admin)
router.post('/', protect, authorize('admin'), createEvento);
router.put('/:id', protect, authorize('admin'), updateEvento);
router.delete('/:id', protect, authorize('admin'), deleteEvento);

// Partecipazione (utente autenticato)
router.post('/:id/partecipa', protect, togglePartecipazione);

module.exports = router;
