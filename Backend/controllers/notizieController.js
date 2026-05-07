const Notizia = require('../models/Notizia');
const asyncHandler = require('../middleware/asyncHandler');

// @desc    Get tutte le notizie
// @route   GET /api/notizie
// @access  Public
exports.getNotizie = asyncHandler(async (req, res, next) => {
  const { categoria, inEvidenza, limit = 20, page = 1 } = req.query;
  
  let query = { pubblicato: true };

  // Filtri
  if (categoria) query.categoria = categoria;
  if (inEvidenza) query.inEvidenza = inEvidenza === 'true';

  const skip = (page - 1) * limit;

  const notizie = await Notizia.find(query)
    .populate('autore', 'nome cognome avatar')
    .sort('-createdAt')
    .limit(parseInt(limit))
    .skip(skip)
    .lean();

  const total = await Notizia.countDocuments(query);

  res.status(200).json({
    success: true,
    count: notizie.length,
    total,
    pages: Math.ceil(total / limit),
    currentPage: parseInt(page),
    data: notizie
  });
});

// @desc    Get singola notizia
// @route   GET /api/notizie/:id
// @access  Public
exports.getNotizia = asyncHandler(async (req, res, next) => {
  const notizia = await Notizia.findById(req.params.id)
    .populate('autore', 'nome cognome avatar');

  if (!notizia) {
    return res.status(404).json({
      success: false,
      message: 'Notizia non trovata'
    });
  }

  // Incrementa visualizzazioni
  notizia.visualizzazioni += 1;
  await notizia.save();

  res.status(200).json({
    success: true,
    data: notizia
  });
});

// @desc    Crea nuova notizia
// @route   POST /api/notizie
// @access  Private (Admin)
exports.createNotizia = asyncHandler(async (req, res, next) => {
  req.body.autore = req.user.id;

  const notizia = await Notizia.create(req.body);

  res.status(201).json({
    success: true,
    data: notizia
  });
});

// @desc    Aggiorna notizia
// @route   PUT /api/notizie/:id
// @access  Private (Admin)
exports.updateNotizia = asyncHandler(async (req, res, next) => {
  let notizia = await Notizia.findById(req.params.id);

  if (!notizia) {
    return res.status(404).json({
      success: false,
      message: 'Notizia non trovata'
    });
  }

  notizia = await Notizia.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: notizia
  });
});

// @desc    Elimina notizia
// @route   DELETE /api/notizie/:id
// @access  Private (Admin)
exports.deleteNotizia = asyncHandler(async (req, res, next) => {
  const notizia = await Notizia.findById(req.params.id);

  if (!notizia) {
    return res.status(404).json({
      success: false,
      message: 'Notizia non trovata'
    });
  }

  await notizia.deleteOne();

  res.status(200).json({
    success: true,
    data: {}
  });
});

// @desc    Toggle like notizia
// @route   POST /api/notizie/:id/like
// @access  Private
exports.toggleLike = asyncHandler(async (req, res, next) => {
  const notizia = await Notizia.findById(req.params.id);

  if (!notizia) {
    return res.status(404).json({
      success: false,
      message: 'Notizia non trovata'
    });
  }

  const index = notizia.likes.indexOf(req.user.id);

  if (index > -1) {
    // Rimuovi like
    notizia.likes.splice(index, 1);
  } else {
    // Aggiungi like
    notizia.likes.push(req.user.id);
  }

  await notizia.save();

  res.status(200).json({
    success: true,
    liked: index === -1,
    likesCount: notizia.likes.length
  });
});
