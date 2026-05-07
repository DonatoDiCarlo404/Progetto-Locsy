const Recensione = require('../models/Recensione');
const Ristorante = require('../models/Ristorante');
const asyncHandler = require('../middleware/asyncHandler');

// @desc    Crea recensione
// @route   POST /api/recensioni
// @access  Private
exports.createRecensione = asyncHandler(async (req, res, next) => {
  req.body.autore = req.user.id;

  // Verifica se l'utente ha già recensito questo ristorante
  const existingRecensione = await Recensione.findOne({
    ristorante: req.body.ristorante,
    autore: req.user.id
  });

  if (existingRecensione) {
    return res.status(400).json({
      success: false,
      message: 'Hai già recensito questo ristorante'
    });
  }

  // Verifica che il ristorante esista
  const ristorante = await Ristorante.findById(req.body.ristorante);
  if (!ristorante) {
    return res.status(404).json({
      success: false,
      message: 'Ristorante non trovato'
    });
  }

  const recensione = await Recensione.create(req.body);
  
  await recensione.populate('autore', 'nome cognome avatar');

  res.status(201).json({
    success: true,
    data: recensione
  });
});

// @desc    Aggiorna recensione
// @route   PUT /api/recensioni/:id
// @access  Private (Owner)
exports.updateRecensione = asyncHandler(async (req, res, next) => {
  let recensione = await Recensione.findById(req.params.id);

  if (!recensione) {
    return res.status(404).json({
      success: false,
      message: 'Recensione non trovata'
    });
  }

  // Solo l'autore può modificare
  if (recensione.autore.toString() !== req.user.id) {
    return res.status(403).json({
      success: false,
      message: 'Non autorizzato a modificare questa recensione'
    });
  }

  recensione = await Recensione.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  }).populate('autore', 'nome cognome avatar');

  res.status(200).json({
    success: true,
    data: recensione
  });
});

// @desc    Elimina recensione
// @route   DELETE /api/recensioni/:id
// @access  Private (Owner o Admin)
exports.deleteRecensione = asyncHandler(async (req, res, next) => {
  const recensione = await Recensione.findById(req.params.id);

  if (!recensione) {
    return res.status(404).json({
      success: false,
      message: 'Recensione non trovata'
    });
  }

  // Solo autore o admin
  if (recensione.autore.toString() !== req.user.id && req.user.ruolo !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Non autorizzato a eliminare questa recensione'
    });
  }

  await recensione.deleteOne();

  res.status(200).json({
    success: true,
    data: {}
  });
});

// @desc    Toggle like recensione
// @route   POST /api/recensioni/:id/like
// @access  Private
exports.toggleLike = asyncHandler(async (req, res, next) => {
  const recensione = await Recensione.findById(req.params.id);

  if (!recensione) {
    return res.status(404).json({
      success: false,
      message: 'Recensione non trovata'
    });
  }

  const index = recensione.likes.indexOf(req.user.id);

  if (index > -1) {
    recensione.likes.splice(index, 1);
  } else {
    recensione.likes.push(req.user.id);
  }

  await recensione.save();

  res.status(200).json({
    success: true,
    liked: index === -1,
    likesCount: recensione.likes.length
  });
});
