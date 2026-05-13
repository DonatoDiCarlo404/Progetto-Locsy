const mongoose = require('mongoose');

const ristoranteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, 'Il nome è obbligatorio'],
    trim: true
  },
  descrizione: {
    type: String,
    default: ''
  },
  categoria: {
    type: String,
    enum: ['Tradizionale', 'Pizza', 'Gourmet', 'Fast Food', 'Etnico', 'Bar/Caffè', 'Altro'],
    default: 'Altro'
  },
  immagine: {
    type: String,
    default: ''
  },
  galleria: [{
    type: String
  }],
  indirizzo: {
    type: String,
    required: [true, 'L\'indirizzo è obbligatorio']
  },
  coordinate: {
    type: {
      type: String,
      enum: ['Point']
    },
    coordinates: {
      type: [Number] // [longitude, latitude]
    }
  },
  telefono: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  sitoWeb: {
    type: String,
    default: ''
  },
  orari: [{
    giorno: {
      type: String,
      enum: ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica']
    },
    aperto: {
      type: Boolean,
      default: true
    },
    orario: {
      type: String,
      default: ''
    }
  }],
  fasciaDiPrezzo: {
    type: String,
    enum: ['€', '€€', '€€€', '€€€€'],
    default: '€€'
  },
  ratingMedio: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  numeroRecensioni: {
    type: Number,
    default: 0
  },
  pubblicato: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index geospaziale (sparse = ignora documenti senza coordinate)
ristoranteSchema.index({ coordinate: '2dsphere' }, { sparse: true });

// Index per filtrare per categoria e rating
ristoranteSchema.index({ categoria: 1, ratingMedio: -1 });
ristoranteSchema.index({ pubblicato: 1, ratingMedio: -1 });

// Index per ricerca
ristoranteSchema.index({ nome: 'text', descrizione: 'text' });

module.exports = mongoose.model('Ristorante', ristoranteSchema);
