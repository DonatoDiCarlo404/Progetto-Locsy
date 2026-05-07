const Commento = require('../models/Commento');
const asyncHandler = require('../middleware/asyncHandler');

// @desc    Get commenti per riferimento
// @route   GET /api/commenti
// @access  Public
exports.getCommenti = asyncHandler(async (req, res, next) => {
  const { tipo, riferimento } = req.query;

  if (!tipo || !riferimento) {
    return res.status(400).json({
      success: false,
      message: 'Tipo e riferimento sono obbligatori'
    });
  }

  const commenti = await Commento.find({
    tipoRiferimento: tipo,
    riferimento: riferimento,
    commentoPadre: null // Solo commenti principali, non risposte
  })
    .populate('autore', 'nome cognome avatar')
    .populate({
      path: 'risposte',
      populate: { path: 'autore', select: 'nome cognome avatar' }
    })
    .sort('createdAt');

  res.status(200).json({
    success: true,
    count: commenti.length,
    data: commenti
  });
});

// @desc    Crea commento
// @route   POST /api/commenti
// @access  Private
exports.createCommento = asyncHandler(async (req, res, next) => {
  req.body.autore = req.user.id;

  const commento = await Commento.create(req.body);
  
  await commento.populate('autore', 'nome cognome avatar');

  res.status(201).json({
    success: true,
    data: commento
  });
});

// @desc    Elimina commento
// @route   DELETE /api/commenti/:id
// @access  Private (Owner o Admin)
exports.deleteCommento = asyncHandler(async (req, res, next) => {
  const commento = await Commento.findById(req.params.id);

  if (!commento) {
    return res.status(404).json({
      success: false,
      message: 'Commento non trovato'
    });
  }

  // Solo autore o admin possono eliminare
  if (commento.autore.toString() !== req.user.id && req.user.ruolo !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Non autorizzato a eliminare questo commento'
    });
  }

  await commento.deleteOne();

  res.status(200).json({
    success: true,
    data: {}
  });
});

// @desc    Toggle like commento
// @route   POST /api/commenti/:id/like
// @access  Private
exports.toggleLike = asyncHandler(async (req, res, next) => {
  const commento = await Commento.findById(req.params.id);

  if (!commento) {
    return res.status(404).json({
      success: false,
      message: 'Commento non trovato'
    });
  }

  const index = commento.likes.indexOf(req.user.id);

  if (index > -1) {
    commento.likes.splice(index, 1);
  } else {
    commento.likes.push(req.user.id);
  }

  await commento.save();

  res.status(200).json({
    success: true,
    liked: index === -1,
    likesCount: commento.likes.length
  });
});

// @desc    Rispondi a commento
// @route   POST /api/commenti/:id/reply
// @access  Private
exports.replyCommento = asyncHandler(async (req, res, next) => {
  const commentoPadre = await Commento.findById(req.params.id);

  if (!commentoPadre) {
    return res.status(404).json({
      success: false,
      message: 'Commento non trovato'
    });
  }

  // Crea risposta
  const risposta = await Commento.create({
    contenuto: req.body.contenuto,
    autore: req.user.id,
    tipoRiferimento: commentoPadre.tipoRiferimento,
    riferimento: commentoPadre.riferimento,
    commentoPadre: commentoPadre._id
  });

  // Aggiungi risposta al commento padre
  commentoPadre.risposte.push(risposta._id);
  await commentoPadre.save();

  await risposta.populate('autore', 'nome cognome avatar');

  res.status(201).json({
    success: true,
    data: risposta
  });
});
