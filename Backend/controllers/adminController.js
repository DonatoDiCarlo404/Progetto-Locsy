const User = require('../models/User');
const Segnalazione = require('../models/Segnalazione');
const Notizia = require('../models/Notizia');
const Evento = require('../models/Evento');
const Commento = require('../models/Commento');
const asyncHandler = require('../middleware/asyncHandler');

// @desc    Get statistiche dashboard
// @route   GET /api/admin/stats
// @access  Private (Admin)
exports.getStats = asyncHandler(async (req, res, next) => {
  const oggi = new Date();
  oggi.setHours(0, 0, 0, 0);

  const settimanaFa = new Date();
  settimanaFa.setDate(settimanaFa.getDate() - 7);

  // Statistiche utenti
  const utentiTotali = await User.countDocuments();
  const nuoviOggi = await User.countDocuments({ createdAt: { $gte: oggi } });
  const nuoviSettimana = await User.countDocuments({ createdAt: { $gte: settimanaFa } });

  // Statistiche segnalazioni
  const segnalazioniPerStato = await Segnalazione.aggregate([
    { $group: { _id: '$stato', count: { $sum: 1 } } }
  ]);

  const segnalazioniTotali = await Segnalazione.countDocuments();
  const segnalazioniOggi = await Segnalazione.countDocuments({ createdAt: { $gte: oggi } });

  // Notizie
  const notiziePubblicate = await Notizia.countDocuments({ pubblicato: true });

  // Eventi prossimi
  const eventiProssimi = await Evento.countDocuments({
    pubblicato: true,
    dataInizio: { $gte: new Date() }
  });

  // Engagement
  const commentiTotali = await Commento.countDocuments();
  const commentiOggi = await Commento.countDocuments({ createdAt: { $gte: oggi } });

  res.status(200).json({
    success: true,
    data: {
      utenti: {
        totali: utentiTotali,
        nuoviOggi,
        nuoviSettimana
      },
      segnalazioni: {
        totali: segnalazioniTotali,
        oggi: segnalazioniOggi,
        perStato: segnalazioniPerStato.reduce((acc, item) => {
          acc[item._id] = item.count;
          return acc;
        }, {})
      },
      contenuti: {
        notizie: notiziePubblicate,
        eventiProssimi
      },
      engagement: {
        commentiTotali,
        commentiOggi
      }
    }
  });
});

// @desc    Get lista utenti
// @route   GET /api/admin/utenti
// @access  Private (Admin)
exports.getUtenti = asyncHandler(async (req, res, next) => {
  const { attivo, limit = 50, page = 1 } = req.query;

  let query = {};
  if (attivo !== undefined) query.attivo = attivo === 'true';

  const skip = (page - 1) * limit;

  const utenti = await User.find(query)
    .select('-password')
    .sort('-createdAt')
    .limit(parseInt(limit))
    .skip(skip);

  const total = await User.countDocuments(query);

  res.status(200).json({
    success: true,
    count: utenti.length,
    total,
    data: utenti
  });
});

// @desc    Ban/Unban utente
// @route   PUT /api/admin/utenti/:id/ban
// @access  Private (Admin)
exports.banUtente = asyncHandler(async (req, res, next) => {
  const utente = await User.findById(req.params.id);

  if (!utente) {
    return res.status(404).json({
      success: false,
      message: 'Utente non trovato'
    });
  }

  // Non può bannare altri admin
  if (utente.ruolo === 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Non puoi bannare un amministratore'
    });
  }

  utente.attivo = !utente.attivo;
  await utente.save();

  res.status(200).json({
    success: true,
    data: utente,
    message: utente.attivo ? 'Utente riattivato' : 'Utente bannato'
  });
});

// @desc    Elimina commento (moderazione)
// @route   DELETE /api/admin/commenti/:id
// @access  Private (Admin)
exports.deleteCommento = asyncHandler(async (req, res, next) => {
  const commento = await Commento.findById(req.params.id);

  if (!commento) {
    return res.status(404).json({
      success: false,
      message: 'Commento non trovato'
    });
  }

  await commento.deleteOne();

  res.status(200).json({
    success: true,
    message: 'Commento eliminato'
  });
});

// @desc    Get tutte le segnalazioni (admin view)
// @route   GET /api/admin/segnalazioni
// @access  Private (Admin)
exports.getSegnalazioni = asyncHandler(async (req, res, next) => {
  const { stato, priorita, categoria, limit = 50, page = 1 } = req.query;

  let query = {};
  if (stato) query.stato = stato;
  if (priorita) query.priorita = priorita;
  if (categoria) query.categoria = categoria;

  const skip = (page - 1) * limit;

  const segnalazioni = await Segnalazione.find(query)
    .populate('utente', 'nome cognome email telefono')
    .populate('rispostaAdmin.autore', 'nome cognome')
    .sort('-createdAt')
    .limit(parseInt(limit))
    .skip(skip);

  const total = await Segnalazione.countDocuments(query);

  res.status(200).json({
    success: true,
    count: segnalazioni.length,
    total,
    data: segnalazioni
  });
});
