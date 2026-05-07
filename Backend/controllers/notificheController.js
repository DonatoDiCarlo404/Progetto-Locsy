const Notifica = require('../models/Notifica');
const asyncHandler = require('../middleware/asyncHandler');

// @desc    Get notifiche utente
// @route   GET /api/notifiche
// @access  Private
exports.getNotifiche = asyncHandler(async (req, res, next) => {
  const { lette } = req.query;

  let query = { utente: req.user.id };
  
  if (lette !== undefined) {
    query.letta = lette === 'true';
  }

  const notifiche = await Notifica.find(query)
    .sort('-createdAt')
    .limit(50);

  res.status(200).json({
    success: true,
    count: notifiche.length,
    data: notifiche
  });
});

// @desc    Get count notifiche non lette
// @route   GET /api/notifiche/count
// @access  Private
exports.getCountNonLette = asyncHandler(async (req, res, next) => {
  const count = await Notifica.countDocuments({
    utente: req.user.id,
    letta: false
  });

  res.status(200).json({
    success: true,
    count
  });
});

// @desc    Segna notifica come letta
// @route   PUT /api/notifiche/:id/letta
// @access  Private
exports.markAsRead = asyncHandler(async (req, res, next) => {
  const notifica = await Notifica.findById(req.params.id);

  if (!notifica) {
    return res.status(404).json({
      success: false,
      message: 'Notifica non trovata'
    });
  }

  // Verifica ownership
  if (notifica.utente.toString() !== req.user.id) {
    return res.status(403).json({
      success: false,
      message: 'Non autorizzato'
    });
  }

  notifica.letta = true;
  await notifica.save();

  res.status(200).json({
    success: true,
    data: notifica
  });
});

// @desc    Segna tutte le notifiche come lette
// @route   PUT /api/notifiche/leggi-tutte
// @access  Private
exports.markAllAsRead = asyncHandler(async (req, res, next) => {
  await Notifica.updateMany(
    { utente: req.user.id, letta: false },
    { letta: true }
  );

  res.status(200).json({
    success: true,
    message: 'Tutte le notifiche sono state lette'
  });
});

// @desc    Elimina notifica
// @route   DELETE /api/notifiche/:id
// @access  Private
exports.deleteNotifica = asyncHandler(async (req, res, next) => {
  const notifica = await Notifica.findById(req.params.id);

  if (!notifica) {
    return res.status(404).json({
      success: false,
      message: 'Notifica non trovata'
    });
  }

  // Verifica ownership
  if (notifica.utente.toString() !== req.user.id) {
    return res.status(403).json({
      success: false,
      message: 'Non autorizzato'
    });
  }

  await notifica.deleteOne();

  res.status(200).json({
    success: true,
    data: {}
  });
});
