const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  getSalvati,
  addSalvato,
  removeSalvato,
  toggleSalvato
} = require('../controllers/salvatiController');

// Tutte le routes richiedono autenticazione
router.use(protect);

router.get('/', getSalvati);
router.post('/', addSalvato);
router.delete('/:id', removeSalvato);
router.post('/toggle', toggleSalvato);

module.exports = router;
