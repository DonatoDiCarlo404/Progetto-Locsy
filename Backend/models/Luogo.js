const mongoose = require('mongoose');

const luogoSchema = new mongoose.Schema({
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
    enum: ['Monumento', 'Museo', 'Chiesa', 'Parco', 'Piazza', 'Altro'],
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
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: false
    }
  },
  orari: {
    type: String,
    default: ''
  },
  prezzo: {
    type: String,
    default: 'Gratuito'
  },
  telefono: {
    type: String,
    default: ''
  },
  sitoWeb: {
    type: String,
    default: ''
  },
  suggerito: {
    type: Boolean,
    default: false
  },
  pubblicato: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index geospaziale
luogoSchema.index({ coordinate: '2dsphere' });

// Index per filtrare luoghi suggeriti
luogoSchema.index({ suggerito: 1, pubblicato: 1 });
luogoSchema.index({ categoria: 1, pubblicato: 1 });

module.exports = mongoose.model('Luogo', luogoSchema);
