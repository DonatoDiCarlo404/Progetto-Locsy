const Offerta = require('../models/Offerta');
const asyncHandler = require('../middleware/asyncHandler');

// @desc    Get tutte le offerte attive
// @route   GET /api/offerte
// @access  Public
exports.getOfferte = asyncHandler(async (req, res, next) => {
  const { categoria, limit = 20, page = 1 } = req.query;
  
  let query = {
    pubblicato: true,
    dataFine: { $gte: new Date() } // Solo offerte attive
  };

  if (categoria) query.categoria = categoria;

  const skip = (page - 1) * limit;

  const offerte = await Offerta.find(query)
    .sort('-createdAt')
    .limit(parseInt(limit))
    .skip(skip)
    .lean();

  const total = await Offerta.countDocuments(query);

  res.status(200).json({
    success: true,
    count: offerte.length,
    total,
    data: offerte
  });
});

// @desc    Get singola offerta
// @route   GET /api/offerte/:id
// @access  Public
exports.getOfferta = asyncHandler(async (req, res, next) => {
  const offerta = await Offerta.findById(req.params.id);

  if (!offerta) {
    return res.status(404).json({
      success: false,
      message: 'Offerta non trovata'
    });
  }

  res.status(200).json({
    success: true,
    data: offerta
  });
});

// @desc    Crea offerta
// @route   POST /api/offerte
// @access  Private (Admin)
exports.createOfferta = asyncHandler(async (req, res, next) => {
  const offerta = await Offerta.create(req.body);

  res.status(201).json({
    success: true,
    data: offerta
  });
});

// @desc    Aggiorna offerta
// @route   PUT /api/offerte/:id
// @access  Private (Admin)
exports.updateOfferta = asyncHandler(async (req, res, next) => {
  let offerta = await Offerta.findById(req.params.id);

  if (!offerta) {
    return res.status(404).json({
      success: false,
      message: 'Offerta non trovata'
    });
  }

  offerta = await Offerta.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: offerta
  });
});

// @desc    Elimina offerta
// @route   DELETE /api/offerte/:id
// @access  Private (Admin)
exports.deleteOfferta = asyncHandler(async (req, res, next) => {
  const offerta = await Offerta.findById(req.params.id);

  if (!offerta) {
    return res.status(404).json({
      success: false,
      message: 'Offerta non trovata'
    });
  }

  await offerta.deleteOne();

  res.status(200).json({
    success: true,
    data: {}
  });
});
