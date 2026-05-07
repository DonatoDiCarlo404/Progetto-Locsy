const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const {
  getStats,
  getUtenti,
  banUtente,
  deleteCommento,
  getSegnalazioni
} = require('../controllers/adminController');

// Tutte le routes richiedono admin
router.use(protect, authorize('admin'));

router.get('/stats', getStats);
router.get('/utenti', getUtenti);
router.put('/utenti/:id/ban', banUtente);
router.delete('/commenti/:id', deleteCommento);
router.get('/segnalazioni', getSegnalazioni);

module.exports = router;
