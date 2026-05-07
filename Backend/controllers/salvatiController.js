const Salvato = require('../models/Salvato');
const asyncHandler = require('../middleware/asyncHandler');

// @desc    Get salvati utente
// @route   GET /api/salvati
// @access  Private
exports.getSalvati = asyncHandler(async (req, res, next) => {
  const { tipo } = req.query;

  let query = { utente: req.user.id };
  if (tipo) query.tipo = tipo;

  const salvati = await Salvato.find(query)
    .populate('riferimento')
    .sort('-createdAt');

  // Raggruppa per tipo
  const raggruppati = {
    notizie: [],
    eventi: [],
    ristoranti: [],
    luoghi: [],
    offerte: []
  };

  salvati.forEach(item => {
    if (item.riferimento) { // Verifica che il riferimento esista ancora
      const key = item.tipo === 'notizia' ? 'notizie' : 
                  item.tipo === 'evento' ? 'eventi' :
                  item.tipo === 'ristorante' ? 'ristoranti' :
                  item.tipo === 'luogo' ? 'luoghi' : 'offerte';
      raggruppati[key].push({
        ...item.toObject(),
        riferimento: item.riferimento
      });
    }
  });

  res.status(200).json({
    success: true,
    count: salvati.length,
    data: raggruppati
  });
});

// @desc    Aggiungi ai salvati
// @route   POST /api/salvati
// @access  Private
exports.addSalvato = asyncHandler(async (req, res, next) => {
  const { tipo, riferimento } = req.body;

  // Verifica se già salvato
  const esistente = await Salvato.findOne({
    utente: req.user.id,
    tipo,
    riferimento
  });

  if (esistente) {
    return res.status(400).json({
      success: false,
      message: 'Già salvato'
    });
  }

  const salvato = await Salvato.create({
    utente: req.user.id,
    tipo,
    riferimento
  });

  await salvato.populate('riferimento');

  res.status(201).json({
    success: true,
    data: salvato
  });
});

// @desc    Rimuovi dai salvati
// @route   DELETE /api/salvati/:id
// @access  Private
exports.removeSalvato = asyncHandler(async (req, res, next) => {
  const salvato = await Salvato.findById(req.params.id);

  if (!salvato) {
    return res.status(404).json({
      success: false,
      message: 'Non trovato'
    });
  }

  // Verifica ownership
  if (salvato.utente.toString() !== req.user.id) {
    return res.status(403).json({
      success: false,
      message: 'Non autorizzato'
    });
  }

  await salvato.deleteOne();

  res.status(200).json({
    success: true,
    data: {}
  });
});

// @desc    Toggle salvato (aggiungi/rimuovi)
// @route   POST /api/salvati/toggle
// @access  Private
exports.toggleSalvato = asyncHandler(async (req, res, next) => {
  const { tipo, riferimento } = req.body;

  const esistente = await Salvato.findOne({
    utente: req.user.id,
    tipo,
    riferimento
  });

  if (esistente) {
    // Rimuovi
    await esistente.deleteOne();
    return res.status(200).json({
      success: true,
      salvato: false,
      message: 'Rimosso dai salvati'
    });
  } else {
    // Aggiungi
    const salvato = await Salvato.create({
      utente: req.user.id,
      tipo,
      riferimento
    });

    return res.status(201).json({
      success: true,
      salvato: true,
      data: salvato,
      message: 'Aggiunto ai salvati'
    });
  }
});
