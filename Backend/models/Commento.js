const mongoose = require('mongoose');

const commentoSchema = new mongoose.Schema({
  contenuto: {
    type: String,
    required: [true, 'Il contenuto è obbligatorio'],
    maxlength: [500, 'Il commento non può superare 500 caratteri']
  },
  autore: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  tipoRiferimento: {
    type: String,
    enum: ['notizia', 'evento'],
    required: true
  },
  riferimento: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: 'tipoRiferimentoModel'
  },
  tipoRiferimentoModel: {
    type: String,
    enum: ['Notizia', 'Evento'],
    required: true
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  risposte: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Commento'
  }],
  commentoPadre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Commento',
    default: null
  }
}, {
  timestamps: true
});

// Index per query sui commenti
commentoSchema.index({ tipoRiferimento: 1, riferimento: 1, createdAt: -1 });
commentoSchema.index({ autore: 1, createdAt: -1 });
commentoSchema.index({ commentoPadre: 1 });

// Pre-save per impostare tipoRiferimentoModel
commentoSchema.pre('save', function(next) {
  if (this.tipoRiferimento === 'notizia') {
    this.tipoRiferimentoModel = 'Notizia';
  } else if (this.tipoRiferimento === 'evento') {
    this.tipoRiferimentoModel = 'Evento';
  }
  next();
});

module.exports = mongoose.model('Commento', commentoSchema);
