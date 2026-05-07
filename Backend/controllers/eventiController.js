const Evento = require('../models/Evento');
const asyncHandler = require('../middleware/asyncHandler');

// @desc    Get tutti gli eventi
// @route   GET /api/eventi
// @access  Public
exports.getEventi = asyncHandler(async (req, res, next) => {
  const { categoria, futuro, limit = 20, page = 1 } = req.query;
  
  let query = { pubblicato: true };

  // Filtri
  if (categoria) query.categoria = categoria;
  
  // Eventi futuri o passati
  if (futuro === 'true') {
    query.dataInizio = { $gte: new Date() };
  } else if (futuro === 'false') {
    query.dataInizio = { $lt: new Date() };
  }

  const skip = (page - 1) * limit;

  const eventi = await Evento.find(query)
    .sort('dataInizio')
    .limit(parseInt(limit))
    .skip(skip)
    .lean();

  const total = await Evento.countDocuments(query);

  res.status(200).json({
    success: true,
    count: eventi.length,
    total,
    data: eventi
  });
});

// @desc    Get singolo evento
// @route   GET /api/eventi/:id
// @access  Public
exports.getEvento = asyncHandler(async (req, res, next) => {
  const evento = await Evento.findById(req.params.id)
    .populate('partecipanti', 'nome cognome avatar');

  if (!evento) {
    return res.status(404).json({
      success: false,
      message: 'Evento non trovato'
    });
  }

  res.status(200).json({
    success: true,
    data: evento
  });
});

// @desc    Crea nuovo evento
// @route   POST /api/eventi
// @access  Private (Admin)
exports.createEvento = asyncHandler(async (req, res, next) => {
  const evento = await Evento.create(req.body);

  res.status(201).json({
    success: true,
    data: evento
  });
});

// @desc    Aggiorna evento
// @route   PUT /api/eventi/:id
// @access  Private (Admin)
exports.updateEvento = asyncHandler(async (req, res, next) => {
  let evento = await Evento.findById(req.params.id);

  if (!evento) {
    return res.status(404).json({
      success: false,
      message: 'Evento non trovato'
    });
  }

  evento = await Evento.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: evento
  });
});

// @desc    Elimina evento
// @route   DELETE /api/eventi/:id
// @access  Private (Admin)
exports.deleteEvento = asyncHandler(async (req, res, next) => {
  const evento = await Evento.findById(req.params.id);

  if (!evento) {
    return res.status(404).json({
      success: false,
      message: 'Evento non trovato'
    });
  }

  await evento.deleteOne();

  res.status(200).json({
    success: true,
    data: {}
  });
});

// @desc    Partecipa/Annulla partecipazione evento
// @route   POST /api/eventi/:id/partecipa
// @access  Private
exports.togglePartecipazione = asyncHandler(async (req, res, next) => {
  const evento = await Evento.findById(req.params.id);

  if (!evento) {
    return res.status(404).json({
      success: false,
      message: 'Evento non trovato'
    });
  }

  const index = evento.partecipanti.indexOf(req.user.id);

  if (index > -1) {
    // Annulla partecipazione
    evento.partecipanti.splice(index, 1);
  } else {
    // Aggiungi partecipazione
    // Check maxPartecipanti
    if (evento.maxPartecipanti > 0 && evento.partecipanti.length >= evento.maxPartecipanti) {
      return res.status(400).json({
        success: false,
        message: 'Posti esauriti'
      });
    }
    evento.partecipanti.push(req.user.id);
  }

  await evento.save();

  res.status(200).json({
    success: true,
    partecipa: index === -1,
    numeroPartecipanti: evento.partecipanti.length
  });
});

// @desc    Get calendario eventi
// @route   GET /api/eventi/calendario
// @access  Public
exports.getCalendario = asyncHandler(async (req, res, next) => {
  const { anno, mese } = req.query;
  
  // Default: mese corrente
  const year = anno || new Date().getFullYear();
  const month = mese || new Date().getMonth() + 1;

  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0, 23, 59, 59);

  const eventi = await Evento.find({
    pubblicato: true,
    dataInizio: { $gte: startDate, $lte: endDate }
  })
    .select('titolo dataInizio oraInizio categoria')
    .sort('dataInizio')
    .lean();

  res.status(200).json({
    success: true,
    count: eventi.length,
    data: eventi
  });
});
