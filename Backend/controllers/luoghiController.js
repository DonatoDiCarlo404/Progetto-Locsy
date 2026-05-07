const Luogo = require('../models/Luogo');
const asyncHandler = require('../middleware/asyncHandler');

// @desc    Get tutti i luoghi
// @route   GET /api/luoghi
// @access  Public
exports.getLuoghi = asyncHandler(async (req, res, next) => {
  const { categoria, suggerito, limit = 20, page = 1 } = req.query;
  
  let query = { pubblicato: true };

  if (categoria) query.categoria = categoria;
  if (suggerito) query.suggerito = suggerito === 'true';

  const skip = (page - 1) * limit;

  const luoghi = await Luogo.find(query)
    .sort('-suggerito nome')
    .limit(parseInt(limit))
    .skip(skip)
    .lean();

  const total = await Luogo.countDocuments(query);

  res.status(200).json({
    success: true,
    count: luoghi.length,
    total,
    data: luoghi
  });
});

// @desc    Get singolo luogo
// @route   GET /api/luoghi/:id
// @access  Public
exports.getLuogo = asyncHandler(async (req, res, next) => {
  const luogo = await Luogo.findById(req.params.id);

  if (!luogo) {
    return res.status(404).json({
      success: false,
      message: 'Luogo non trovato'
    });
  }

  res.status(200).json({
    success: true,
    data: luogo
  });
});

// @desc    Crea luogo
// @route   POST /api/luoghi
// @access  Private (Admin)
exports.createLuogo = asyncHandler(async (req, res, next) => {
  const luogo = await Luogo.create(req.body);

  res.status(201).json({
    success: true,
    data: luogo
  });
});

// @desc    Aggiorna luogo
// @route   PUT /api/luoghi/:id
// @access  Private (Admin)
exports.updateLuogo = asyncHandler(async (req, res, next) => {
  let luogo = await Luogo.findById(req.params.id);

  if (!luogo) {
    return res.status(404).json({
      success: false,
      message: 'Luogo non trovato'
    });
  }

  luogo = await Luogo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: luogo
  });
});

// @desc    Elimina luogo
// @route   DELETE /api/luoghi/:id
// @access  Private (Admin)
exports.deleteLuogo = asyncHandler(async (req, res, next) => {
  const luogo = await Luogo.findById(req.params.id);

  if (!luogo) {
    return res.status(404).json({
      success: false,
      message: 'Luogo non trovato'
    });
  }

  await luogo.deleteOne();

  res.status(200).json({
    success: true,
    data: {}
  });
});
