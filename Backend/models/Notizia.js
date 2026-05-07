const mongoose = require('mongoose');

const notiziaSchema = new mongoose.Schema({
  titolo: {
    type: String,
    required: [true, 'Il titolo è obbligatorio'],
    trim: true,
    maxlength: [200, 'Il titolo non può superare 200 caratteri']
  },
  contenuto: {
    type: String,
    required: [true, 'Il contenuto è obbligatorio']
  },
  sommario: {
    type: String,
    maxlength: [300, 'Il sommario non può superare 300 caratteri']
  },
  immagine: {
    type: String,
    default: ''
  },
  categoria: {
    type: String,
    enum: ['Avviso', 'Evento', 'Lavori', 'Servizi', 'Cultura', 'Sport', 'Altro'],
    default: 'Avviso'
  },
  autore: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  pubblicato: {
    type: Boolean,
    default: true
  },
  inEvidenza: {
    type: Boolean,
    default: false
  },
  visualizzazioni: {
    type: Number,
    default: 0
  },
  linkEsterno: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

// Index per ricerca full-text
notiziaSchema.index({ titolo: 'text', contenuto: 'text', sommario: 'text' });

// Index per filtrare notizie pubblicate e in evidenza
notiziaSchema.index({ pubblicato: 1, createdAt: -1 });
notiziaSchema.index({ inEvidenza: 1, createdAt: -1 });
notiziaSchema.index({ categoria: 1, pubblicato: 1 });

// Virtual per contare commenti
notiziaSchema.virtual('numeroCommenti', {
  ref: 'Commento',
  localField: '_id',
  foreignField: 'riferimento',
  count: true,
  match: { tipoRiferimento: 'notizia' }
});

module.exports = mongoose.model('Notizia', notiziaSchema);
