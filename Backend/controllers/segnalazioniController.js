const Segnalazione = require('../models/Segnalazione');
const asyncHandler = require('../middleware/asyncHandler');

// @desc    Get tutte le segnalazioni (con filtri)
// @route   GET /api/segnalazioni
// @access  Public
exports.getSegnalazioni = asyncHandler(async (req, res, next) => {
  const { stato, categoria, utente } = req.query;
  
  let query = {};

  // Filtri
  if (stato) query.stato = stato;
  if (categoria) query.categoria = categoria;
  if (utente) query.utente = utente;

  // Solo admin può vedere segnalazioni private
  if (!req.user || req.user.ruolo !== 'admin') {
    query.pubblico = true;
  }

  const segnalazioni = await Segnalazione.find(query)
    .populate('utente', 'nome cognome avatar')
    .populate('rispostaAdmin.autore', 'nome cognome')
    .sort('-createdAt')
    .limit(50);

  res.status(200).json({
    success: true,
    count: segnalazioni.length,
    data: segnalazioni
  });
});

// @desc    Get singola segnalazione
// @route   GET /api/segnalazioni/:id
// @access  Public
exports.getSegnalazione = asyncHandler(async (req, res, next) => {
  const segnalazione = await Segnalazione.findById(req.params.id)
    .populate('utente', 'nome cognome avatar email telefono')
    .populate('rispostaAdmin.autore', 'nome cognome');

  if (!segnalazione) {
    return res.status(404).json({
      success: false,
      message: 'Segnalazione non trovata'
    });
  }

  res.status(200).json({
    success: true,
    data: segnalazione
  });
});

// @desc    Crea nuova segnalazione
// @route   POST /api/segnalazioni
// @access  Private
exports.createSegnalazione = asyncHandler(async (req, res, next) => {
  req.body.utente = req.user.id;

  const segnalazione = await Segnalazione.create(req.body);

  res.status(201).json({
    success: true,
    data: segnalazione
  });
});

// @desc    Aggiorna segnalazione
// @route   PUT /api/segnalazioni/:id
// @access  Private (Owner o Admin)
exports.updateSegnalazione = asyncHandler(async (req, res, next) => {
  let segnalazione = await Segnalazione.findById(req.params.id);

  if (!segnalazione) {
    return res.status(404).json({
      success: false,
      message: 'Segnalazione non trovata'
    });
  }

  // Solo owner o admin possono modificare
  if (segnalazione.utente.toString() !== req.user.id && req.user.ruolo !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Non autorizzato a modificare questa segnalazione'
    });
  }

  segnalazione = await Segnalazione.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: segnalazione
  });
});

// @desc    Elimina segnalazione
// @route   DELETE /api/segnalazioni/:id
// @access  Private (Owner o Admin)
exports.deleteSegnalazione = asyncHandler(async (req, res, next) => {
  const segnalazione = await Segnalazione.findById(req.params.id);

  if (!segnalazione) {
    return res.status(404).json({
      success: false,
      message: 'Segnalazione non trovata'
    });
  }

  // Solo owner o admin possono eliminare
  if (segnalazione.utente.toString() !== req.user.id && req.user.ruolo !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Non autorizzato a eliminare questa segnalazione'
    });
  }

  await segnalazione.deleteOne();

  res.status(200).json({
    success: true,
    data: {}
  });
});

// @desc    Aggiungi risposta admin a segnalazione
// @route   PUT /api/segnalazioni/:id/risposta
// @access  Private (Admin only)
exports.addRisposta = asyncHandler(async (req, res, next) => {
  const segnalazione = await Segnalazione.findById(req.params.id);

  if (!segnalazione) {
    return res.status(404).json({
      success: false,
      message: 'Segnalazione non trovata'
    });
  }

  segnalazione.rispostaAdmin = {
    testo: req.body.testo,
    data: Date.now(),
    autore: req.user.id
  };

  // Cambia stato se fornito
  if (req.body.stato) {
    segnalazione.stato = req.body.stato;
  }

  await segnalazione.save();

  res.status(200).json({
    success: true,
    data: segnalazione
  });
});

// @desc    Get segnalazioni vicine (geolocalizzazione)
// @route   GET /api/segnalazioni/radius/:lng/:lat/:distance
// @access  Public
exports.getSegnalazioniInRadius = asyncHandler(async (req, res, next) => {
  const { lng, lat, distance } = req.params;

  // Calcola raggio in radianti (distanza in km / raggio terra in km)
  const radius = distance / 6378;

  const segnalazioni = await Segnalazione.find({
    coordinate: {
      $geoWithin: {
        $centerSphere: [[lng, lat], radius]
      }
    },
    pubblico: true
  }).populate('utente', 'nome cognome');

  res.status(200).json({
    success: true,
    count: segnalazioni.length,
    data: segnalazioni
  });
});
