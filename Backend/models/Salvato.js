const mongoose = require('mongoose');

const salvatoSchema = new mongoose.Schema({
  utente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  tipo: {
    type: String,
    enum: ['notizia', 'evento', 'ristorante', 'luogo', 'offerta'],
    required: true
  },
  riferimento: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: 'tipoModel'
  },
  tipoModel: {
    type: String,
    enum: ['Notizia', 'Evento', 'Ristorante', 'Luogo', 'Offerta'],
    required: true
  }
}, {
  timestamps: true
});

// Index unico per evitare duplicati
salvatoSchema.index({ utente: 1, tipo: 1, riferimento: 1 }, { unique: true });

// Index per query utente
salvatoSchema.index({ utente: 1, tipo: 1, createdAt: -1 });

// Pre-save per impostare tipoModel
salvatoSchema.pre('save', function(next) {
  const tipoMap = {
    'notizia': 'Notizia',
    'evento': 'Evento',
    'ristorante': 'Ristorante',
    'luogo': 'Luogo',
    'offerta': 'Offerta'
  };
  this.tipoModel = tipoMap[this.tipo];
  next();
});

module.exports = mongoose.model('Salvato', salvatoSchema);
