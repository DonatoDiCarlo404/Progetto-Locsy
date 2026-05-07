const mongoose = require('mongoose');

const eventoSchema = new mongoose.Schema({
  titolo: {
    type: String,
    required: [true, 'Il titolo è obbligatorio'],
    trim: true,
    maxlength: [200, 'Il titolo non può superare 200 caratteri']
  },
  descrizione: {
    type: String,
    required: [true, 'La descrizione è obbligatoria']
  },
  immagine: {
    type: String,
    default: ''
  },
  dataInizio: {
    type: Date,
    required: [true, 'La data di inizio è obbligatoria']
  },
  dataFine: {
    type: Date
  },
  oraInizio: {
    type: String,
    required: [true, 'L\'ora di inizio è obbligatoria']
  },
  oraFine: {
    type: String
  },
  luogo: {
    type: String,
    required: [true, 'Il luogo è obbligatorio']
  },
  indirizzo: {
    type: String,
    required: [true, 'L\'indirizzo è obbligatorio']
  },
  coordinate: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: false
    }
  },
  categoria: {
    type: String,
    enum: ['Cultura', 'Sport', 'Musica', 'Teatro', 'Sagra', 'Mercato', 'Bambini', 'Altro'],
    default: 'Altro'
  },
  organizzatore: {
    type: String,
    default: 'Comune'
  },
  suggerito: {
    type: Boolean,
    default: false
  },
  partecipanti: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  maxPartecipanti: {
    type: Number,
    default: 0 // 0 = illimitato
  },
  prezzo: {
    type: Number,
    default: 0 // 0 = gratuito
  },
  linkEsterno: {
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

// Index geospaziale
eventoSchema.index({ coordinate: '2dsphere' });

// Index per filtrare eventi futuri
eventoSchema.index({ dataInizio: 1, pubblicato: 1 });
eventoSchema.index({ categoria: 1, dataInizio: 1 });
eventoSchema.index({ suggerito: 1, dataInizio: 1 });

// Virtual per numero partecipanti
eventoSchema.virtual('numeroPartecipanti').get(function() {
  return this.partecipanti ? this.partecipanti.length : 0;
});

// Virtual per verificare se evento è passato
eventoSchema.virtual('passato').get(function() {
  return new Date() > new Date(this.dataFine || this.dataInizio);
});

module.exports = mongoose.model('Evento', eventoSchema);
