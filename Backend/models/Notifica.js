const mongoose = require('mongoose');

const notificaSchema = new mongoose.Schema({
  utente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  tipo: {
    type: String,
    enum: ['segnalazione', 'commento', 'evento', 'rifiuti', 'sistema'],
    required: true
  },
  titolo: {
    type: String,
    required: [true, 'Il titolo è obbligatorio'],
    maxlength: [100, 'Il titolo non può superare 100 caratteri']
  },
  messaggio: {
    type: String,
    required: [true, 'Il messaggio è obbligatorio'],
    maxlength: [300, 'Il messaggio non può superare 300 caratteri']
  },
  link: {
    type: String,
    default: ''
  },
  letta: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Index per query utente
notificaSchema.index({ utente: 1, letta: 1, createdAt: -1 });
notificaSchema.index({ utente: 1, tipo: 1, createdAt: -1 });

module.exports = mongoose.model('Notifica', notificaSchema);
