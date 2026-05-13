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
    enum: ['Notizia', 'Evento', 'Ristorante', 'Luogo', 'Offerta']
  }
}, {
  timestamps: true
});

// Index unico per evitare duplicati
salvatoSchema.index({ utente: 1, tipo: 1, riferimento: 1 }, { unique: true });

// Index per query utente
salvatoSchema.index({ utente: 1, tipo: 1, createdAt: -1 });

// Pre-save per impostare tipoModel automaticamente
salvatoSchema.pre('save', async function() {
  const tipoMap = {
    'notizia': 'Notizia',
    'evento': 'Evento',
    'ristorante': 'Ristorante',
    'luogo': 'Luogo',
    'offerta': 'Offerta'
  };
  this.tipoModel = tipoMap[this.tipo];
});

module.exports = mongoose.model('Salvato', salvatoSchema);
