const mongoose = require('mongoose');

const segnalazioneSchema = new mongoose.Schema({
  utente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  categoria: {
    type: String,
    enum: [
      'Buche stradali',
      'Illuminazione pubblica',
      'Rifiuti e pulizia',
      'Verde pubblico',
      'Segnaletica',
      'Arredo urbano',
      'Altro'
    ],
    required: [true, 'La categoria è obbligatoria']
  },
  titolo: {
    type: String,
    required: [true, 'Il titolo è obbligatorio'],
    trim: true,
    maxlength: [100, 'Il titolo non può superare 100 caratteri']
  },
  descrizione: {
    type: String,
    required: [true, 'La descrizione è obbligatoria'],
    maxlength: [1000, 'La descrizione non può superare 1000 caratteri']
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
  foto: [{
    type: String // URL Cloudinary
  }],
  stato: {
    type: String,
    enum: ['aperta', 'in_lavorazione', 'risolta', 'rifiutata'],
    default: 'aperta'
  },
  priorita: {
    type: String,
    enum: ['bassa', 'media', 'alta'],
    default: 'media'
  },
  rispostaAdmin: {
    testo: String,
    data: Date,
    autore: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  pubblico: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index geospaziale per query basate sulla posizione
segnalazioneSchema.index({ coordinate: '2dsphere' });

// Index per filtrare per stato e data
segnalazioneSchema.index({ stato: 1, createdAt: -1 });
segnalazioneSchema.index({ utente: 1, createdAt: -1 });
segnalazioneSchema.index({ categoria: 1, stato: 1 });

module.exports = mongoose.model('Segnalazione', segnalazioneSchema);
