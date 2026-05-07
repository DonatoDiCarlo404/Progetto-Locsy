const mongoose = require('mongoose');

const offertaSchema = new mongoose.Schema({
  titolo: {
    type: String,
    required: [true, 'Il titolo è obbligatorio'],
    trim: true,
    maxlength: [100, 'Il titolo non può superare 100 caratteri']
  },
  descrizione: {
    type: String,
    required: [true, 'La descrizione è obbligatoria'],
    maxlength: [500, 'La descrizione non può superare 500 caratteri']
  },
  nomeNegozio: {
    type: String,
    required: [true, 'Il nome del negozio è obbligatorio']
  },
  categoria: {
    type: String,
    enum: ['Alimentari', 'Abbigliamento', 'Elettronica', 'Bellezza', 'Casa', 'Sport', 'Altro'],
    default: 'Altro'
  },
  immagine: {
    type: String,
    default: ''
  },
  sconto: {
    type: String,
    default: ''
  },
  dataInizio: {
    type: Date,
    default: Date.now
  },
  dataFine: {
    type: Date,
    required: [true, 'La data di fine è obbligatoria']
  },
  indirizzo: {
    type: String,
    default: ''
  },
  telefono: {
    type: String,
    default: ''
  },
  pubblicato: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index per filtrare offerte attive
offertaSchema.index({ dataFine: 1, pubblicato: 1 });
offertaSchema.index({ categoria: 1, dataFine: 1 });

// Virtual per verificare se l'offerta è ancora valida
offertaSchema.virtual('attiva').get(function() {
  return new Date() < new Date(this.dataFine);
});

module.exports = mongoose.model('Offerta', offertaSchema);
