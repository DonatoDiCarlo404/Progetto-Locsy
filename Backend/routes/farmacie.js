const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const {
  getFarmacie,
  getFarmacieTurno,
  getFarmacieVicine,
  createFarmacia,
  updateFarmacia,
  deleteFarmacia
} = require('../controllers/farmacieController');

// Route speciali
router.get('/turno', getFarmacieTurno);
router.get('/vicine/:lng/:lat/:distance', getFarmacieVicine);

// Routes pubbliche
router.get('/', getFarmacie);

// Routes protette (admin)
router.post('/', protect, authorize('admin'), createFarmacia);
router.put('/:id', protect, authorize('admin'), updateFarmacia);
router.delete('/:id', protect, authorize('admin'), deleteFarmacia);

module.exports = router;
