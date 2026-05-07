const Ristorante = require('../models/Ristorante');
const Recensione = require('../models/Recensione');
const asyncHandler = require('../middleware/asyncHandler');

// @desc    Get tutti i ristoranti
// @route   GET /api/ristoranti
// @access  Public
exports.getRistoranti = asyncHandler(async (req, res, next) => {
  const { categoria, fasciaDiPrezzo, sort = '-ratingMedio', limit = 20, page = 1 } = req.query;
  
  let query = { pubblicato: true };

  if (categoria) query.categoria = categoria;
  if (fasciaDiPrezzo) query.fasciaDiPrezzo = fasciaDiPrezzo;

  const skip = (page - 1) * limit;

  const ristoranti = await Ristorante.find(query)
    .sort(sort)
    .limit(parseInt(limit))
    .skip(skip)
    .lean();

  const total = await Ristorante.countDocuments(query);

  res.status(200).json({
    success: true,
    count: ristoranti.length,
    total,
    data: ristoranti
  });
});

// @desc    Get singolo ristorante
// @route   GET /api/ristoranti/:id
// @access  Public
exports.getRistorante = asyncHandler(async (req, res, next) => {
  const ristorante = await Ristorante.findById(req.params.id);

  if (!ristorante) {
    return res.status(404).json({
      success: false,
      message: 'Ristorante non trovato'
    });
  }

  // Get recensioni recenti
  const recensioni = await Recensione.find({ ristorante: req.params.id })
    .populate('autore', 'nome cognome avatar')
    .sort('-createdAt')
    .limit(5);

  res.status(200).json({
    success: true,
    data: {
      ...ristorante.toObject(),
      recensioniRecenti: recensioni
    }
  });
});

// @desc    Crea ristorante
// @route   POST /api/ristoranti
// @access  Private (Admin)
exports.createRistorante = asyncHandler(async (req, res, next) => {
  const ristorante = await Ristorante.create(req.body);

  res.status(201).json({
    success: true,
    data: ristorante
  });
});

// @desc    Aggiorna ristorante
// @route   PUT /api/ristoranti/:id
// @access  Private (Admin)
exports.updateRistorante = asyncHandler(async (req, res, next) => {
  let ristorante = await Ristorante.findById(req.params.id);

  if (!ristorante) {
    return res.status(404).json({
      success: false,
      message: 'Ristorante non trovato'
    });
  }

  ristorante = await Ristorante.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: ristorante
  });
});

// @desc    Elimina ristorante
// @route   DELETE /api/ristoranti/:id
// @access  Private (Admin)
exports.deleteRistorante = asyncHandler(async (req, res, next) => {
  const ristorante = await Ristorante.findById(req.params.id);

  if (!ristorante) {
    return res.status(404).json({
      success: false,
      message: 'Ristorante non trovato'
    });
  }

  await ristorante.deleteOne();

  res.status(200).json({
    success: true,
    data: {}
  });
});

// @desc    Get recensioni ristorante
// @route   GET /api/ristoranti/:id/recensioni
// @access  Public
exports.getRecensioni = asyncHandler(async (req, res, next) => {
  const recensioni = await Recensione.find({ ristorante: req.params.id })
    .populate('autore', 'nome cognome avatar')
    .sort('-createdAt');

  res.status(200).json({
    success: true,
    count: recensioni.length,
    data: recensioni
  });
});
