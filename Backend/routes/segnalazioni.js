const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const { segnalazioneLimiter } = require('../middleware/rateLimiter');
const {
  getSegnalazioni,
  getSegnalazione,
  createSegnalazione,
  updateSegnalazione,
  deleteSegnalazione,
  addRisposta,
  getSegnalazioniInRadius
} = require('../controllers/segnalazioniController');

// Route geolocalizzazione
router.get('/radius/:lng/:lat/:distance', getSegnalazioniInRadius);

// Routes base
router.route('/')
  .get(getSegnalazioni)
  .post(protect, segnalazioneLimiter, createSegnalazione);

router.route('/:id')
  .get(getSegnalazione)
  .put(protect, updateSegnalazione)
  .delete(protect, deleteSegnalazione);

// Route risposta admin
router.put('/:id/risposta', protect, authorize('admin'), addRisposta);

module.exports = router;
