const mongoose = require('mongoose');

const farmaciaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, 'Il nome è obbligatorio'],
    trim: true
  },
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
    required: [true, 'Il telefono è obbligatorio']
  },
  turno: {
    type: Boolean,
    default: false
  },
  dataTurno: {
    type: Date
  },
  orari: {
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

// Index geospaziale (sparse = ignora documenti senza coordinate)
farmaciaSchema.index({ coordinate: '2dsphere' }, { sparse: true });

// Index per filtrare farmacie di turno
farmaciaSchema.index({ turno: 1, dataTurno: 1 });

module.exports = mongoose.model('Farmacia', farmaciaSchema);
